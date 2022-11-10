import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LogIn from './pages/login/login'
import SignUp from './pages/login/signup'
import Home from './pages/home/home'
import Listings from './pages/listings/listings'
import ListingDetail from './pages/listings/listingDetail'
import NewListing from './pages/listings/newListing'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LogIn />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/newlisting' element={<NewListing />} />
                    <Route path='/listings' element={<Listings />} />
                    <Route
                        path='/listings/:listingId'
                        element={<ListingDetail />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
