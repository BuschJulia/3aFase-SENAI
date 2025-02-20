// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ComoJogar from '../components/ComoJogar';
import OQueE from '../components/OQueE';
import Home from '../components/Home';
import Jogar from '../components/Jogar';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/como-jogar" element={<ComoJogar />} />
      <Route path="/o-que-e" element={<OQueE />} />
      <Route path="/jogar" element={<Jogar />} />
    </Routes>
  );
};

export default routes;
