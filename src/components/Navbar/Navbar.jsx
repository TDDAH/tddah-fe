import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
const navigate = useNavigate()

const handleLoginClick = () => {
  localStorage.clear()
navigate('/')
}

const handleHomeClick = () => {
  navigate('/home')
}

const handleAchievementsPageClick = () => {
  navigate('/achievements')
}

const handleSubmitTestClick = () => {
  navigate('/submittest')
}

const handleLeaderboards = () => {
  navigate('/leaderboards')
}

  return (
    <section className='nav-bar'>
      <button className='nav-button' onClick={handleHomeClick}>Home</button>
      <button className='nav-button' onClick={handleAchievementsPageClick}>Achievements</button>
      <button className='nav-button' onClick={handleSubmitTestClick}>Submit a Test</button>
      {/* <button className='nav-button' onClick={handleLeaderboards}>Leaderboards</button> */}
      <button className='nav-button'  onClick={handleLoginClick}>Login/Logout</button>
      <h3>Welcome user!</h3>
    </section>
  );
}

export default Navbar;
