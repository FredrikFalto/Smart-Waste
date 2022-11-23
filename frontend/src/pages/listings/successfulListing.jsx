import React from 'react'

import Navbar from '../../components/navbar/navbar'

import SuccessIcon from '../../img/SuccessIcon.svg'

const successfulListing = () => {
    const newListing = () => {
        window.location = `/newlisting`
    }

    const myListings = () => {
        window.location = `/profile/mylistings`
    }

    return (
        <div>
            <Navbar />

            <div className='grid grid-cols-1 place-items-center container mx-auto px-4 pb-20'>
                <img
                    src={SuccessIcon}
                    alt='Success icon'
                    className='mt-40 w-1/3 md:w-2/6 lg:w-1/4 xl:w-1/5'
                />
                <p className='text-2xl pt-6'>Tack för din annons!</p>
                <button
                    onClick={myListings}
                    className='w-full rounded-md border border-transparent bg-green-600 py-2 px-4 mt-5 text-sm font-medium text-white md:w-4/5 lg:w-3/5 xl:w-2/6'
                >
                    Visa mina annonser
                </button>
                <button
                    onClick={newListing}
                    className='w-full rounded-md border border-black py-2 px-4 mt-3 text-sm font-medium text-black md:w-4/5 lg:w-3/5 xl:w-2/6'
                >
                    Ny annons
                </button>
            </div>
        </div>
    )
}

export default successfulListing
