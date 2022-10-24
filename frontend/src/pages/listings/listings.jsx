import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../../components/navbar/navbar';
import Searchbar from '../../components/searchbar/searchbar';
import Categorybar from '../../components/categorybar/categorybar';

const url = 'http://localhost:4000/api';

const Listings = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(url + '/listings').then((res) => {
            const listings = res.data.map((item) => {
                return (
                    <div key={item._id} className="card p-1 basis-1/2">
                        <a href="">
                            <img
                                src={item.imglink}
                                alt={item.dish}
                                className="rounded"
                            />
                            <hr className="my-1 h-px bg-gray-200 border-0 shadow" />
                            <h3>{item.dish}</h3>
                            <p className="text-sm">{item.portions} portioner</p>
                            <p className="text-sm">{item.price}kr</p>
                        </a>
                    </div>
                );
            });
            setItems(listings);
        });
    });

    return (
        <div>
            <Searchbar />
            <Navbar />
            <hr className="my-1 h-px bg-gray-200 border-0 shadow" />

            <h3 className="ml-2 text-lg">Vad är du sugen på?</h3>
            <Categorybar />

            <h3 className="ml-2 text-xl pt-6">Trött på det gamla vanliga?</h3>

            <div className="grid grid-cols-2 gap-1 mx-1 overflow-auto">
                {items}
            </div>
        </div>
    );
};

export default Listings;
