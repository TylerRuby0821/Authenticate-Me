import { csrfFetch } from './csrf';

const CREATE_POST = 'post/CREATE_POST'
const GET_POSTS= 'post/GET_POSTS'

const newPost = (post) => {
    return {
    type: CREATE_POST,
     payload: post
    }
}

const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        payload: posts,
    }
}

export const createPost = (post) => async (dispatch) => {

    const response = await csrfFetch(`api/posts/`, {
        method: 'POST',
        body: JSON.stringify(post)
    })

    const data = await response.json()

    dispatch(newPost(data.post));

    return data;
}

export const getAllPosts = () => async (dispatch) => {

    const response = await csrfFetch('/api/posts')
    const data = await response.json()
    dispatch(getPosts(data.posts))
    return response
}

function postReducer(state={}, action) {
    let newState;
    switch(action.type){
        case CREATE_POST:
            newState= Object.assign({}, state, {[action.payload.id]: action.payload})
            return newState;
        case GET_POSTS:
            newState= Object.assign({}, action.payload)
            return newState;
        default:
            return state;
    }
}

export default postReducer
