import React, { useState } from 'react';
import './Form.css'
function Form() {
  const [formData, setFormData] = useState({
    owner: '',
    GithubName: ''
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
      if(formData.owner.trim() == '' || formData.GithubName.trim() == ''){
        throw new Error('Please fill out the form')
      }
    try {
      const response = await fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users/1/repos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        console.log('Form submitted successfully!');
        console.log(response)
        setFormData({ owner: '', GithubName: '' });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
        name="GithubName" 
        value={formData.GithubName} 
        onChange={handleChange} 
        placeholder="Github Repo Name" 
        className="form-input" 
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default Form;
