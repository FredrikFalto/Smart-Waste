import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../../components/navbar/navbar';
import Searchbar from '../../components/searchbar/searchbar';
import Categorybar from '../../components/categorybar/categorybar';

const url = 'http://localhost:4000/api/';

const Listings = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get(url + 'listings')
            .then((res) => {
                const listings = res.data.map((item) => {
                    return (
                        <div key={item._id} className="card p-1 basis-1/2">
                            <a
                                href={`http://localhost:3000/listings/${item._id}`}
                            >
                                <img
                                    src={item.imglink}
                                    alt={item.dish}
                                    className="rounded"
                                />
                                <hr className="my-1 h-px bg-gray-200 border-0 shadow" />
                                <h3>{item.dish}</h3>
                                <div className="grid grid-cols-2">
                                    <p className="text-sm">
                                        {item.portions} portioner
                                    </p>
                                    <p className="text-sm justify-self-end">
                                        {item.price}kr
                                    </p>
                                </div>
                            </a>
                        </div>
                    );
                });
                setItems(listings);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Searchbar />
            <hr className="my-1 h-px bg-gray-200 border-0 shadow" />

            <Navbar />

            <div className="container mx-auto">
                <h3 className="ml-2 text-lg">Vad är du sugen på?</h3>
                <Categorybar />

                <h3 className="ml-2 text-xl">Trött på det gamla vanliga?</h3>

                <div className="grid grid-cols-2 gap-1 mx-1 overflow-auto pb-20">
                    {items}
                </div>
            </div>
        </div>
    );
};

export default Listings;
