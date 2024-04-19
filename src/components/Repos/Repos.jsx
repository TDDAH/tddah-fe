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
          setRepos(data)
        })
        .catch(err => console.error(err));
    }
  }, [userId]);

  if (repos.length === 0) {
  return <div className="text-center text-gray-300">No repositories found.</div>;
}

return (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 bg-white">
    {repos.map((repo, index) => (
      <section 
        className="repo-card p-6 bg-white text-black rounded-xl border-8 border-gray-900 shadow-lg" 
        style={{ borderColor: '#333', borderWidth: '0.9rem'}}
        key={index}
      >
        <article className="mb-4 text-white-800 font-bold">Repository Owner: {repo.data.attributes.owner}</article>
        <article className="mb-4 text-white-700">Project: {repo.data.attributes.name}</article>
        <article className="text-white-600">Testing Covered: {repo.data.attributes.covered_percent}</article>
      </section>
    ))}
  </div>
);
}
export default Repos;
