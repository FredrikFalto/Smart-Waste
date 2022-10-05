import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "./pages/login/login";
import Home from "./pages/home/home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
