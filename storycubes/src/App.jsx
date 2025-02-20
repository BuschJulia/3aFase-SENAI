// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from '../src/router/routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes /> 
    </Router>
  );
}

export default App;
