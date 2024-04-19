import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Achievements from '../Achievements/Achievements';
import Repos from '../Repos/Repos';

function Home() {
  const [users, setUsers] = useState([]);
  const [userMade, setUserMade] = useState(false);
  useEffect(() => {
    fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users')
      .then(res => res.json())
      .then(data => setUsers(data.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const githubEmail = localStorage.getItem('githubEmail');
    const userObj = users.find(user => user.attributes.email === githubEmail);
    if (userObj) {
      localStorage.setItem('user', JSON.stringify(userObj));
      setUserMade(true);
    }
  }, [users]);

  return (
    <section>
      <Navbar />
      <Achievements />
      {userMade && <Repos />}
    </section>
  );
}

export default Home;
