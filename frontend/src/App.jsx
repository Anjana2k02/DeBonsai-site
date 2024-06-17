import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="app">
    <Router>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      
    </Router>
    </div>
  );
};

export default App;
