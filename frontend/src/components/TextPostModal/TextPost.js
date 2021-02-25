import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function TextPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch().catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
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
                type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />


                <input
                type="text"
                placeholder="Your text here.."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                />

            <button type="submit">Post</button>
            </form>
        </div>
    </div>
  );
}

export default TextPost;
