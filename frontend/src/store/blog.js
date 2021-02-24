import { csrfFetch } from './csrf';


const GET_BLOG = '/api/blog/getBlog'

const getBlog = (blog) => {
    return {
        type: CREATE_BLOG,
        payload: blog
    }
}

export const createBlog = (blog) => async dispatch => {
    const {name, userId} = blog
    const res = await csrfFetch(`/api/blogs/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {name, userId}
      });
      const data = await res.json()
      dispatch(getBlog(data.blog))
      return res;
  };

