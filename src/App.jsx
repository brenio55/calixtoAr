import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHome from './components/UserHome/UserHome';
import './sass/styles.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default App;
