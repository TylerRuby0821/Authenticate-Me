import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/dashboard" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential:"demo@user.io", password:"password" }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <div className="form-container">
      <h2 className="header">Placeholder Header</h2>
      <div>
        <input
        className= "user"
        placeholder="Email"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
        />

      </div>
      <div>
        <input
          className='password'
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <ul className="errors">
        {errors.map((error, idx) => <li className= "error" key={idx}>{error}</li>)}
      </ul>
      <button className= "submit" type="submit">Log In</button>
      <button className= "submit" onClick={handleDemo}>Log In as Demo</button>
     </div>
    </form>
  );
}

export default LoginFormPage;
