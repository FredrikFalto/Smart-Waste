import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../../components/navbar/navbar'
import Searchbar from '../../components/searchbar/searchbar'

import Meat from '../../img/Mobile/CategoryMeatMobile.svg'
import Vegetarian from '../../img/Mobile/CategoryVegetarianMobile.svg'
import Fish from '../../img/Mobile/CategoryFishMobile.svg'
import Chicken from '../../img/Mobile/CategoryChickenMobile.svg'

const url = 'http://localhost:4000/api/'

const Listings = () => {
    const [items, setItems] = useState([])

    const filterItems = (category) => {
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

            {/* Category bar */}
            <div className='container mx-auto'>
                <div className='grid grid-cols-2'>
                    <h3 className='ml-2 text-lg'>Vad är du sugen på?</h3>
                    <button
                        className='text-lg text-right mr-2'
                        onClick={getItems}
                    >
                        Rensa filter
                    </button>
                </div>
                <div className='flex flex-row overflow-x-auto mx-1 gap-1 pb-1'>
                    <div>
                        <button>
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
                        <button>
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
                        <button>
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
                        <button>
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
                </div>

                <h3 className='ml-2 text-xl'>Trött på det gamla vanliga?</h3>

                <div className='grid grid-cols-2 gap-1 mx-1 overflow-auto pb-20'>
                    {items}
                </div>
            </div>
        </div>
    )
}

export default Listings
