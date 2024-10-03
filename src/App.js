import './App.css';
import './styles/index.scss'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Rental from './pages/Rental';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />

        <Route path="/" element={<Home />} />
        <Route path="/rental/:id" element={<Rental />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

