import React, { useState } from 'react';
import './Login.css';

function Login() {
  function handleClick() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user:email`

  }

 return (
    <button className='github-button' onClick={handleClick}>Sign up with github</button>
 )
}
 export default Login