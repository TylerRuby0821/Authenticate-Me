import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './VideoModal.css'
import {createPost, getAllPosts} from '../../store/post'


function VideoPost({setShowModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
      type: 'video',
    }
    setShowModal(false)
    dispatch(createPost(post))
    return dispatch(getAllPosts())



  };

  return (
      <div className='modal__text--container'>
        <div className='div__form--header'>
            <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
                ))}
            </ul>

                <input
                className ="modal__title"
                type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />


                <input
                className='modal__input'
                type="text"
                placeholder="Your video url here.."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                />

            <button className= 'modal__text--button' type="submit">Post</button>
            </form>
        </div>
    </div>
  );
}

export default VideoPost;
