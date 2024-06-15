import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';




const App = () => {
  return (
    <Router>
      <Navbar />
      
      <div className="container">
        <Routes>
          
          <Route path='/' element={< Home/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
