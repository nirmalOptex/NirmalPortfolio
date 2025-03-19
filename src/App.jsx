import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/UserPage';
import MainPage from './pages/mainpage';
import Projects from './pages/projects';
import './App.css';
import Skills from './pages/skills';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<FirstPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />


      </Routes>
    </Router>
    </>
  );
};

export default App;