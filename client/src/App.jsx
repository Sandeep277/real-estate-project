import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Sign from './pages/Sign';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
