import React, { useEffect, useState } from 'react';

function Leaderboards() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users')
      .then(res => res.json())
      .then(data => {
        const usersWithHighestRepo = data.map(user => {
          const highestRepo = user.repos.reduce((prev, current) => {
            return (prev.covered_percent > current.covered_percent) ? prev : current
          }, { covered_percent: 0 });
          return { ...user, highestRepo };
        });
        usersWithHighestRepo.sort((a, b) => b.highestRepo.covered_percent - a.highestRepo.covered_percent);
        setUsers(usersWithHighestRepo);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{index + 1}. {user.name}</h2>
          <p>Highest Coverage: {user.highestRepo.covered_percent}%</p>
        </div>
      ))}
    </div>
  );
}

export default Leaderboards;