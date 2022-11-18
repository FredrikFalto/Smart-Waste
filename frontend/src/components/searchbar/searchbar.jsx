import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'http://localhost:4000'

const Searchbar = (listings) => {
    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchOutput, setSearchOutput] = useState([])

    console.log(listings.listings)

    useEffect(() => {
        axios
            .get(url + '/api/listings')
            .then((res) => {
                setItems(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setSearchOutput([])
        items.filter((value) => {
            if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                setSearchOutput((searchOutput) => [...searchOutput, value])
            }
        })
    }, [searchTerm])

    return (
        <div>
            <div className='flex items-center justify-center pt-1'>
                <div className='relative w-96 md:w-auto'>
                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                        <svg
                            aria-hidden='true'
                            class='w-5 h-5 text-gray-500'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                clip-rule='evenodd'
                            ></path>
                        </svg>
                    </div>

                    <input
                        className='border-2 border-gray-300 bg-white block  h-10 pl-10 pr-3 w-full rounded-lg text-sm focus:outline-stone-600'
                        type='search'
                        name='search'
                        placeholder='Sök...'
                    />
                </div>

                {/* <div>{listings}</div> */}
            </div>
        </div>
    )
}

export default Searchbar
