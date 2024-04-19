import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    localStorage.clear()
  navigate('/')
  }
  
  const handleHomeClick = () => {
    navigate('/home')
  }
  
  const handleSubmitTestClick = () => {
    navigate('/submittest')
  }


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h6 className="footer-heading">About Us</h6>
          <p>TDDAH! Productions LLC is a leading company in test-driven developement.</p>
        </div>
        <div className="footer-section">
          <h6 className="footer-heading">Quick Links</h6>
          <ul className="footer-links">
            <li><a href="#" onClick={handleHomeClick}>Home</a></li>
            <li><a href="#" onClick={handleSubmitTestClick}>SubmitTest</a></li>
            <li><a href="#" onClick={handleLoginClick}>Logout</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h6 className="footer-heading">Contact Us</h6>
          <p>Email: info@MattIsTheBest.com</p>
          <p>Phone: +9(11)</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TDDAH! Productions LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

