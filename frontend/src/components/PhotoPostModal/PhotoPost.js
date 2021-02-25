import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './PhotoModal.css'
import {createPost} from '../../store/post'


function PhotoPost({setShowModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
      type: 'image',
    }
    setShowModal(false)
    return dispatch(createPost(post))



  };

  return (
      <div className='modal__text--container'>
        <div className='div__form--header'>
            <form onSubmit={handleSubmit}>

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
                placeholder='Photo url Here!'
                type="text"
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

export default PhotoPost;
