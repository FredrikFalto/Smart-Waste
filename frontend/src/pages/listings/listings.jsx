import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Searchbar from '../../components/searchbar/searchbar';

const Listings = () => {
    return (
        <div>
            <Searchbar />
            <Navbar />

            <h1 className="text-3xl font-bold underline text-center text-green-700">
                Listings
            </h1>
        </div>
    );
};

export default Listings;
