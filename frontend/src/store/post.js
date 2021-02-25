import { csrfFetch } from './csrf';
const CREATE_POST = 'post/CREATE_POST'

const newPost = (post) => {
    return {
    type: CREATE_POST,
     payload: post
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

function postReducer(state={}, action) {
    let newState;
    switch(action.type){
        case CREATE_POST:
            newState= Object.assign({}, state, {[action.payload.id]: action.payload})
            return newState;
        default:
            return state;
    }
}

export default postReducer
