import React from 'react'

import Navbar from '../../components/navbar/navbar'

const MyListings = () => {
    return (
        <div>
            <Navbar />

            <div className='grid grid-cols-1 place-items-center container mx-auto px-4 pb-2'>
                <h1 className='text-xl text-green-700 mt-2 underline underline-offset-4'>
                    Mina annonser
                </h1>

                <div className='card p-1 mt-2'>
                    <a href={`http://localhost:3000/listings/`}>
                        <img
                            src='{item.imglink}'
                            alt='{item.dish}'
                            className='rounded'
                        />
                        <hr className='my-1 h-px bg-gray-200 border-0 shadow' />
                        <h3>"item.dish"</h3>
                        <div className='grid grid-cols-2'>
                            <p className='text-sm'>"item.portions" portioner</p>
                            <p className='text-sm justify-self-end'>
                                "item.price"kr
                            </p>
                        </div>
                    </a>
                </div>

                <div className='card p-1 mt-2'>
                    <a href={`http://localhost:3000/listings/`}>
                        <img
                            src='{item.imglink}'
                            alt='{item.dish}'
                            className='rounded'
                        />
                        <hr className='my-1 h-px bg-gray-200 border-0 shadow' />
                        <h3>"item.dish"</h3>
                        <div className='grid grid-cols-2'>
                            <p className='text-sm'>"item.portions" portioner</p>
                            <p className='text-sm justify-self-end'>
                                "item.price"kr
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MyListings
