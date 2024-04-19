import React, { useState } from 'react';
import './Form.css'
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'))
  const userId = user.id

  const [formData, setFormData] = useState({
    owner: '',
    name: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
      if(formData.owner.trim() == '' || formData.name.trim() == ''){
        throw new Error('Please fill out the form')
      }
    try {
      const response = await fetch(`https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users/${userId}/repos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        console.log('Form submitted successfully!');
        console.log(response)
        setFormData({ owner: '', name: '' });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    navigate('/home')
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="owner" 
        value={formData.owner} 
        onChange={handleChange} 
        placeholder="Owner Name" 
        className="form-input" 
      />
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Github Repo Name" 
        className="form-input" 
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default Form;
