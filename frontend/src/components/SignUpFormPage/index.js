import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
  <form className='signup-form' onSubmit={handleSubmit}>
    <div className='signup__form--container'>
    <h2 className='header'>Placeholder Header</h2>
        <input
          className='email'
          placeholder='Email'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />

        <div></div>
          <input
            className='signup_password'
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        <div>
          <input
            placeholder='Confirm Password'
            className='confirm'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Blog Name"
            className='blog'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <ul className='errors'>
              {errors.map((error, idx) => <li className='error' key={idx}>{error}</li>)}
          </ul>
      </div>

      <button className='sign_up' type="submit">Sign Up</button>
    </div>
  </form>
);
}

export default SignupFormPage;
