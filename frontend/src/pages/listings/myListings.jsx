import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../../components/navbar/navbar'

const url = 'http://localhost:4000/api'

const MyListings = () => {
    const [items, setItems] = useState([])
    const [activeListings, setActiveListings] = useState(null)

    const loggedUser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        axios
            .get(url + '/listings')
            .then((res) => {
                const listings = res.data.map((item) => {
                    if (item.userid === loggedUser.email) {
                        setActiveListings(true)

                        return (
                            <div key={item._id} className='card p-1 mt-2'>
                                <a
                                    href={`http://localhost:3000/listings/${item._id}`}
                                >
                                    <div className='flex'>
                                        <img
                                            src={item.imglink}
                                            alt={item.dish}
                                            className='rounded w-1/2'
                                        />
                                        {/* <hr className='my-1 h-px bg-gray-200 border-0 shadow' /> */}
                                        <div className='grid grid-cols-1 w-1/2 ml-2'>
                                            <h3 className=''>{item.dish}</h3>

                                            <p className='text-sm'>
                                                {item.portions} portioner
                                            </p>
                                            <p className='text-sm'>
                                                {item.price}kr
                                            </p>

                                            <div className='flex'>
                                                <button className='bg-green-600 text-white rounded-md w-full mr-2'>
                                                    Ändra
                                                </button>
                                                <button className='bg-red-600 text-white rounded-md w-full'>
                                                    Ta bort
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                })
                setItems(listings)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Navbar />

            <div className='grid place-items-center container mx-auto px-4 pb-2'>
                <h1 className='text-xl text-green-700 mt-2 underline underline-offset-4'>
                    Mina annonser
                </h1>
            </div>

            {activeListings && <div className='grid grid-cols-1'>{items}</div>}

            {!activeListings && (
                <div className='container mx-auto text-center mt-96'>
                    <p>Du har inga aktiva annonser.</p>
                </div>
            )}
        </div>
    )
}

export default MyListings
