import React, { useEffect, useState } from 'react';

function Repos() {
  const [repos, setRepos] = useState([]);
  const userJson = JSON.parse(localStorage.getItem('user'));
  const user = userJson ? userJson : null;
  const userId = user ? user.id : null;

  useEffect(() => {
    if (userId) {
      fetch(`https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users/${userId}/repos`)
        .then(res => res.json())
        .then(data => {
          setRepos(data); // Assuming `data` is an array of repositories
        })
        .catch(err => console.error(err));
    }
  }, [userId]);

  if (repos.length === 0) {
    return <div>No repositories found.</div>;
  }

  return (
    <div>
      {repos.map((repo, index) => (
        <section className='repo-card' key={index}>
          <article>Repository Owner: {repo.data.attributes.owner}</article>
          <article>Project: {repo.data.attributes.name}</article>
          <article>Testing Covered: {repo.data.attributes.covered_percent}</article>
        </section>
      ))}
    </div>
  );
}

export default Repos;
