import React, { useState, useEffect } from 'react';

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userJson = JSON.parse(localStorage.getItem('user'));
  const user = userJson ? userJson : null;
  const userId = user ? user.id : null;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/achievements')
      .then(res => res.json())
      .then(data => {
        setAchievements(data.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch achievements');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      setError(null);
      fetch(`https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users/${userId}/repos`)
        .then(res => res.json())
        .then(data => {
          setRepos(data);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to fetch repositories');
          setLoading(false);
        });
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const repoSum = repos.reduce((acc, repo) => acc + parseFloat(repo.data.attributes.covered_percent), 0);
  const repoAverage = repos.length > 0 ? repoSum / repos.length : 0;

  const lowestAchievement = achievements.find(achiev => achiev.attributes.criteria > repoAverage);
  console.log(lowestAchievement)
  return (
    <section className='achievements-section'>
      <div>Repository Average: {repoAverage.toFixed(2)}%</div>
      {lowestAchievement ? (
        <div>
          Lowest Achievement with criteria higher than repository average:
          <div>Achievement Name: {lowestAchievement.attributes.name}</div>
          <div>Criteria: {lowestAchievement.attributes.criteria}%</div>
        </div>
      ) : (
        <div>No achievement found with criteria higher than repository average.</div>
      )}
    </section>
  );
}

export default Achievements;
