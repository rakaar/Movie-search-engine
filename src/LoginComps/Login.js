import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login/login.scss';

export default function Login() {
  return (
    <div className='box'>
      <div className='field'>
        <label className='label'>Username</label>
        <div className='control'>
          <input className='input is-info' type='text' placeholder='username' />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Password</label>
        <div className='control'>
          <input className='input' type='password' placeholder='password' />
        </div>
      </div>
      <a className='button is-link is-rounded is-fullWidth'>
        <Link to={`/upload`}>
          <h3 className='login'>Login</h3>
        </Link>
      </a>
    </div>
  );
}
