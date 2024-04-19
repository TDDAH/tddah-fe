import React, { useState } from 'react';
import './Login.css';
import LoginBtn from '../LoginBtn/LoginBtn';

function Login() {
  function handleClick() {
    localStorage.setItem('loginStep', 'signup')
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user:email`

  }

  function handleEmail(e) {
    localStorage.setItem('githubEmail', e.target.value)
  }

 return (
  <section className='login-btn-section' >
    <input type='text' placeholder='Enter Github Email' className='github-email-input' onChange={handleEmail}/>
    <h3>Enter Github Email then sign in or signup</h3>

    <button className='github-button-signup' onClick={handleClick}>Sign up with github</button>

    <LoginBtn />
  </section>
 )
}
 export default Login