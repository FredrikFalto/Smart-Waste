import React from 'react';

const Searchbar = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                />{' '}
                <button className="text-white bg-green-600"></button>
            </div>
        </div>
    );
};

export default Searchbar;
