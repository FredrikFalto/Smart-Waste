import React from 'react'

import Navbar from '../../components/navbar/navbar'
import ListingForm from '../../components/listing/ListingForm'

const newListing = () => {
    const loggedUser = JSON.parse(localStorage.getItem('user'))

    return (
        <div>
            <Navbar />

            <div className='container mx-auto px-4 pb-20 md:w-2/5 lg:w-5/12 xl:w-1/3'>
                {loggedUser && <ListingForm />}

                {!loggedUser && 
                    <div className='mt-96'>
                        <h1 className='text-xl w-full text-center'>
                            Du måste logga in för att skapa annons
                        </h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default newListing
