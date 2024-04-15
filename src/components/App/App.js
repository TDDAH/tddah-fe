import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Redirect from '../Redirect/Redirect'
import SubmitTests from '../SubmitTests/SubmitTests'

function App() {
  return (
    <section className='main'>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route  path='/home' element={<Home />} />
        <Route path='/submittest' element={<SubmitTests />} />
        <Route path='/auth/github/callback' element={<Redirect />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;