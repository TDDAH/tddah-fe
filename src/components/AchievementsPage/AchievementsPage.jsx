import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

function AchievementsPage() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/achievements')
      .then(res => res.json())
      .then(data => {
        setAchievements(data.data);
      })
      .catch(err => console.log(err));
  }, []);

  const achievCards = achievements.map((achiev, index) => (
    <section 
      className="repo-card p-6 bg-white text-black rounded-xl border-8 border-gray-900 shadow-lg" 
      style={{ borderColor: '#333', borderWidth: '0.9rem'}}
      key={index}
    >
      <article className="mb-4 text-white-800 font-bold">Achievement Name: {achiev.attributes.name}</article>
      <article className="mb-4 text-white-700">Criteria: {achiev.attributes.criteria}</article>
    </section>
  ));
  
  return (
    <div className="achievements-page-section min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black-500">Achievement List</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievCards}
        </div>
      </div>
    </div>
  );
}

export default AchievementsPage;
