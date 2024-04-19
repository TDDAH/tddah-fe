import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';

function AchievementsPage() {
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/achievements')
      .then(res => res.json())
      .then(data => {
        setAchievements(data.data)
  })
      .catch(err => console.log(err))
  })

  const achievCards = achievements.map((achiev, index) => {
    return (
      <section className='achievement-card' key={index}>
        <article>Achievement Name: {achiev.attributes.name}</article>
        <article>Description: {achiev.attributes.criteria}</article>
      </section>
    )
  }, [])

  return (
    <div className='achievements-page-section'>
      <Navbar />
      <h1>Achievement List</h1>
      {achievCards}
    </div>
  );
}


export default AchievementsPage;
