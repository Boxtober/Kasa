import './App.css';
import './styles/index.scss'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Error from './pages/error/Error';
import Rental from './pages/rental/Rental';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apropos' element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/rental/:id" element={<Rental />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

