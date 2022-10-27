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
                            <img src={listing.imglink} alt={listing.dish} />
                            <p>
                                Bäst före:
                                {format(
                                    new Date(listing.expirationdate),
                                    ' dd/MM'
                                )}
                            </p>
                            <h1 className="text-xl">{listing.dish}</h1>
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
            <div>{item}</div>
        </div>
    );
};

export default Listing;
