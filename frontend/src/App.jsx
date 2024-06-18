import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Instructions from './components/Instructions/Instructions';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            <div className="app">
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Instructions/>
            </div>
            
            <Footer />
        </>
    );
};

export default App;
