import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './TextModal.css'
import {createPost} from '../../store/post'


function TextPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
      type: 'text',
    }
    return dispatch(createPost(post))



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
                className='modal__text'
                type="text"
                placeholder="Your text here.."
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

export default TextPost;
