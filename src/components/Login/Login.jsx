import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    id: ''
  });

  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    if (loginData.email.trim() === '' || loginData.password.trim() === '') {
      setLoginError('Please fill out all fields for login');
      return;
    } else {
      setLoginError('');
    }

    try {
      console.log('Logging in:', loginData);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    if (
      signupData.name.trim() === '' ||
      signupData.email.trim() === '' ||
      signupData.password.trim() === '' ||
      signupData.confirmPassword.trim() === ''
    ) {
      setSignupError('Please fill out all fields for signup');
      return;
    } else if (signupData.password !== signupData.confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    } else {
      setSignupError('');
    }

    try {
      console.log('Signing up:', signupData);
      navigate('/home');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleInputChange = (event, type) => {
    const { name, value } = event.target;
    if (type === 'login') {
      setLoginData(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else if (type === 'signup') {
      setSignupData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <section className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={loginData.email} 
          onChange={(e) => handleInputChange(e, 'login')} 
        />
        {loginError && <div className="error-message">{loginError}</div>}
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={loginData.password} 
          onChange={(e) => handleInputChange(e, 'login')} 
        />
        <button type="submit">Login</button>
      </form>

      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="hidden" name="id" value={signupData.id} />
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={signupData.name} 
          onChange={(e) => handleInputChange(e, 'signup')} 
        />
        {signupError && <div className="error-message">{signupError}</div>}
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={signupData.email} 
          onChange={(e) => handleInputChange(e, 'signup')} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={signupData.password} 
          onChange={(e) => handleInputChange(e, 'signup')} 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={signupData.confirmPassword} 
          onChange={(e) => handleInputChange(e, 'signup')} 
        />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default Login;
