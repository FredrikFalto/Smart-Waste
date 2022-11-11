import React from 'react'

import Navbar from '../../components/navbar/navbar'

import SuccessIcon from '../../img/SuccessIcon.svg'

const successfulListing = () => {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-1 place-items-center container mx-auto px-4 pb-20'>
                <img
                    src={SuccessIcon}
                    alt='Success icon'
                    className='mt-40 w-2/5'
                />
                <p className='text-2xl pt-6'>Tack för din annons!</p>
                <button className='w-full rounded-md border border-transparent bg-green-600 py-2 px-4 mt-5 text-sm font-medium text-white'>
                    Visa mina annonser
                </button>
                <button className='w-full rounded-md border border-black py-2 px-4 mt-2 text-sm font-medium text-black'>
                    Ny annons
                </button>
            </div>
        </div>
    )
}

export default successfulListing
