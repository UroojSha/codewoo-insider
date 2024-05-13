import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
    <Routes>
      <Route path="/codewoo-insider" element={<Home />} />
      <Route path="/codewoo-insider/projects" element={<Projects />} />
      <Route path="/codewoo-insider/about" element={<About />} />
      <Route path="/codewoo-insider/contact" element={<Contact />} />
    </Routes>
    </Router>
  );
};

export default App;
