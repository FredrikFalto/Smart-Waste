import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../../components/navbar/navbar'

const url = 'http://localhost:4000/api'

const MyListings = () => {
    const [items, setItems] = useState([])
    const [activeListings, setActiveListings] = useState(null)

    const loggedUser = JSON.parse(localStorage.getItem('user'))

    const deleteListing = async (listingId) => {
        if (window.confirm('Är du säker på att du vill ta bort annonsen?')) {
            try {
                await axios.delete(url + '/listings/' + listingId)
            } catch (error) {
                console.log(error)
            }

            // Reload window after delete
            window.location.reload(false)
        }
    }

    const showListing = (listingId) => {
        window.location = `/listings/${listingId}`
    }

    useEffect(() => {
        axios
            .get(url + '/listings')
            .then((res) => {
                const listings = res.data.map((item) => {
                    if (item.userid === loggedUser.email) {
                        setActiveListings(true)

                        return (
                            <div key={item._id} className='card p-1 mt-2'>
                                <div className='flex'>
                                    <img
                                        src={item.imglink}
                                        alt={item.dish}
                                        className='rounded w-1/2'
                                    />
                                    <div className='grid grid-cols-1 w-1/2 ml-2'>
                                        <h3 className=''>{item.dish}</h3>

                                        <p className='text-sm'>
                                            {item.portions} portioner
                                        </p>
                                        <p className='text-sm'>
                                            {item.price}kr
                                        </p>

                                        <div className='flex'>
                                            <button
                                                onClick={() =>
                                                    showListing(item._id)
                                                }
                                                className='bg-green-600 text-white rounded-md w-full mr-2 xl:h-10'
                                            >
                                                Visa
                                            </button>
                                            <button
                                                className='bg-red-600 text-white rounded-md w-full xl:h-10'
                                                onClick={() =>
                                                    deleteListing(item._id)
                                                }
                                            >
                                                Ta bort
                                            </button>
                                        </div>
                                    </div>
                                </div>
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

            {activeListings && <div className='grid grid-cols-1 container mx-auto overflow-auto pb-20 md:w-1/2 xl:w-1/4'>
                    {items}
            </div>}

            {!activeListings && (
                <div className='container mx-auto text-center mt-96'>
                    <p>Du har inga aktiva annonser.</p>
                </div>
            )}
        </div>
    )
}

export default MyListings
