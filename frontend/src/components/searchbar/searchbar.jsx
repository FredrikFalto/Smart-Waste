import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'http://localhost:4000/api/'

const Searchbar = () => {
    const [listing, setListing] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchOutput, setSearchOutput] = useState([])

    useEffect(() => {
        axios
            .get(url + 'listings')
            .then((res) => {
                setListing(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setSearchOutput([])

        listing.filter((value) => {
            if (value.dish.toLowerCase().includes(searchTerm.toLowerCase())) {
                setSearchOutput((searchOutput) => [...searchOutput, value])
            }
        })
    }, [searchTerm])

    return (
        <div className='grid grid-cols-1 place-items-center pt-1'>
            <div className='relative w-96 sm:w-8/12 md:w-7/12 lg:w-6/12'>
                <div className='flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none'>
                    <svg
                        aria-hidden='true'
                        className='w-5 h-5 text-gray-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                            clipRule='evenodd'
                        ></path>
                    </svg>
                </div>

                <input
                    className='border-2 border-gray-300 bg-white block h-10 pl-10 pr-3 w-full rounded-lg text-sm focus:outline-stone-600'
                    type='text'
                    name='search'
                    placeholder='Sök...'
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
            </div>

            <div className='flex flex-col items-center mt-1 bg-white text-center w-96 sm:w-8/12 md:w-7/12 lg:w-6/12'>
                {searchOutput.map((item) => {
                    return (
                        <div className='m-1 w-1/2 hover:shadow hover:shadow-slate-400' key={item._id}>
                            <a
                                href={`http://localhost:3000/listings/${item._id}`}
                            >
                                <p>{item.dish}</p>
                            </a>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Searchbar
