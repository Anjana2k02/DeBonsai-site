import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
    <Footer />
    </>
    
  );
};

export default App;
