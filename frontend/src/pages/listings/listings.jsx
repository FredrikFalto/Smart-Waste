import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Searchbar from '../../components/searchbar/searchbar';

const Listings = () => {
    return (
        <div>
            <Searchbar />
            <Navbar />

            <hr class="my-1 h-px bg-gray-200 border-0 shadow" />

            <h3 className="ml-2 text-lg">Vad är du sugen på?</h3>
        </div>
    );
};

export default Listings;