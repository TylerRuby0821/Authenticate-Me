import { csrfFetch } from './csrf';

const GET_BLOG = '/blog/getBlog'

export const getBlog = (blog) => {
    return {
        type: GET_BLOG,
        payload: blog
    }
}



// export const createBlog = (blog) => async dispatch => {
//     const {name, userId} = blog
//     const res = await csrfFetch(`/api/blogs/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: {name, userId}
//       });
//       const data = await res.json()
//       dispatch(getBlog(data.blog))
//       return res;
//   };

  const blogReducer = (state= {}, action) => {
      switch(action.type){
          case GET_BLOG:
            return {...state}
          default:
              return state
      }
  }

  export default blogReducer;
