import React, { useState, useEffect } from 'react'
import axios from 'axios'

import "./listings.css"

import Navbar from '../../components/navbar/navbar'
import Searchbar from '../../components/searchbar/searchbar'

import Meat from '../../img/Mobile/CategoryMeatMobile.svg'
import Vegetarian from '../../img/Mobile/CategoryVegetarianMobile.svg'
import Fish from '../../img/Mobile/CategoryFishMobile.svg'
import Chicken from '../../img/Mobile/CategoryChickenMobile.svg'

const url = 'http://localhost:4000/api/'

const Listings = () => {
    const [items, setItems] = useState([])

    const removeSelectedClass = () => {
        document.getElementById('Kött').classList.remove('selected')
        document.getElementById('Vegetariskt').classList.remove('selected')
        document.getElementById('Fisk').classList.remove('selected')
        document.getElementById('Kyckling').classList.remove('selected')
    }

    const clearFilter = () => {
        removeSelectedClass()

        getItems()
    }

    const filterItems = (category) => {
        removeSelectedClass()

        document.getElementById(category).classList.add("selected")

        axios
            .get(url + 'listings')
            .then((res) => {
                const listings = res.data.map((item) => {
                    if (item.category === category) {
                        return (
                            <div key={item._id} className='card p-1 basis-1/2'>
                                <a
                                    href={`http://localhost:3000/listings/${item._id}`}
                                >
                                    <img
                                        src={item.imglink}
                                        alt={item.dish}
                                        className='rounded'
                                    />
                                    <hr className='my-1 h-px bg-gray-200 border-0 shadow' />
                                    <h3>{item.dish}</h3>
                                    <div className='grid grid-cols-2'>
                                        <p className='text-sm'>
                                            {item.portions} portioner
                                        </p>
                                        <p className='text-sm justify-self-end'>
                                            {item.price}kr
                                        </p>
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
    }

    const getItems = () => {
        axios
            .get(url + 'listings')
            .then((res) => {
                const listings = res.data.map((item) => {
                    return (
                        <div key={item._id} className='card p-1 basis-1/2'>
                            <a
                                href={`http://localhost:3000/listings/${item._id}`}
                            >
                                <img
                                    src={item.imglink}
                                    alt={item.dish}
                                    className='rounded'
                                />
                                <hr className='my-1 h-px bg-gray-200 border-0 shadow' />
                                <div>
                                <h3 className='xl:text-lg'>{item.dish}</h3>
                                <div className='grid grid-cols-2'>
                                    <p className='text-sm xl:text-lg'>
                                        {item.portions} portioner
                                    </p>
                                    <p className='text-sm justify-self-end xl:text-lg'>
                                        {item.price}kr
                                    </p>
                                </div>
                                </div>
                            </a>
                        </div>
                    )
                })
                setItems(listings)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div>
            <Searchbar />
            <hr className='my-1 h-px bg-gray-200 border-0 shadow' />

            <Navbar />

            <div className='container mx-auto lg:grid lg:grid-cols-5'>
                <div className=''>
                    <div className='grid grid-cols-2 lg:grid-cols-1 lg:text-center lg:justify-items-center'>
                        <h3 className='ml-1 text-lg lg:ml-0 lg:text-xl xl:pb-0.5'>
                            Vad är du sugen på?
                        </h3>
                            <button
                            className='text-right text-lg mr-1 lg:hidden'
                                // className='text-lg text-right mr-2 lg:text-center'
                                onClick={clearFilter}
                            >
                                Rensa filter
                            </button>
                    </div>
                    <div className='flex flex-row overflow-x-auto mx-1 gap-1 pb-2 lg:grid lg:grid-cols-1 lg:text-center'>
                        <div>
                            <button id="Kött" className='rounded-xl'>
                                <img
                                    src={Meat}
                                    alt='Kött'
                                    className='max-w-none'
                                    onClick={() => {
                                        filterItems('Kött')
                                    }}
                                />
                            </button>
                        </div>
                        <div>
                            <button id='Vegetariskt' className='rounded-xl'>
                                <img
                                    src={Vegetarian}
                                    alt='Vegetariskt'
                                    className='max-w-none'
                                    onClick={() => {
                                        filterItems('Vegetariskt')
                                    }}
                                />
                            </button>
                        </div>
                        <div>
                            <button id='Fisk' className='rounded-xl'>
                                <img
                                    src={Fish}
                                    alt='Fisk'
                                    className='max-w-none'
                                    onClick={() => {
                                        filterItems('Fisk')
                                    }}
                                />
                            </button>
                        </div>
                        <div>
                            <button id='Kyckling' className='rounded-xl'>
                                <img
                                    src={Chicken}
                                    alt='Kyckling'
                                    className='max-w-none'
                                    onClick={() => {
                                        filterItems('Kyckling')
                                    }}
                                />
                            </button>
                        </div>
                        <div>
                            <button
                                className='w-3/5 xl:w-2/5 rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white invisible lg:visible'
                                onClick={clearFilter}
                            >
                                Rensa filter
                            </button>
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-4'>
                    <h3 className='ml-2 text-xl'>Trött på det gamla vanliga?</h3>

                    <div className='grid grid-cols-2 gap-1 mx-1 overflow-auto pb-20 lg:grid-cols-3'>
                        {items}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listings
