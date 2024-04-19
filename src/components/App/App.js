import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Redirect from '../Redirect/Redirect';
import SubmitTests from '../SubmitTests/SubmitTests';
import AchievementsPage from '../AchievementsPage/AchievementsPage';
import Leaderboards from '../Leaderboards/Leaderboards';
import { useState } from 'react';

function App() {
  const location = useLocation();

  const [userId, setUserId] = useState(0)
  return (
    <section className='main'>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home userId={userId} />} />
        <Route path='/achievements' element={<AchievementsPage />} />
        <Route path='/submittest' element={<SubmitTests userId={userId}/>} />
        <Route path='/auth/github/callback' element={<Redirect />} />
        <Route path='/leaderboards' element={<Leaderboards />} />
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </section>
  );
}

export default App;