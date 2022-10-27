import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { format } from 'date-fns';

import Navbar from '../../components/navbar/navbar';

const url = 'http://localhost:4000/api/listings/';

const Listing = () => {
    const listingId = window.location.href.substring(
        window.location.href.lastIndexOf('/') + 1
    );

    const [item, setItem] = useState();

    useEffect(() => {
        axios
            .get(url + listingId)
            .then((res) => {
                const listing = res.data;

                const listingDetail = () => {
                    return (
                        <div className="grid">
                            <img
                                src={listing.imglink}
                                alt={listing.dish}
                                className="w-full"
                            />
                            <div className="p-2">
                                <p className="pb-1">
                                    Bäst före:
                                    {format(
                                        new Date(listing.expirationdate),
                                        ' yyyy-MM-dd'
                                    )}
                                </p>
                                <h3 className="text-2xl">{listing.dish}</h3>
                                <h3 className="text-2xl font-bold">
                                    {listing.price}kr
                                </h3>

                                <hr className="my-1 h-px bg-gray-300 border-0 shadow" />

                                <p className="font-medium">Allergener:</p>
                                <p> {listing.allergens.join(', ')}</p>

                                <hr className="my-1 h-px bg-gray-300 border-0 shadow" />

                                <p className="font-medium">Ingredienser:</p>
                                <p> {listing.ingredients.join(', ')}</p>

                                <hr className="my-1 h-px bg-gray-300 border-0 shadow" />

                                <p className="font-medium">Extra info:</p>
                                <p> {listing.extrainfo}</p>
                            </div>
                        </div>
                    );
                };
                setItem(listingDetail);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto">{item}</div>
        </div>
    );
};

export default Listing;
