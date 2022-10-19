import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './pages/login/login';
import Home from './pages/home/home';
import Listings from './pages/listings/listings';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/listings" element={<Listings />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
