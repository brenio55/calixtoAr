import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHome from './components/UserHome/UserHome';
import './sass/styles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default App;
