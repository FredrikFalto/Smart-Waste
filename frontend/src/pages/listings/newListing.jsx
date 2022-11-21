import React from 'react'

import Navbar from '../../components/navbar/navbar'
import ListingForm from '../../components/listing/ListingForm'

const newListing = () => {
    const loggedUser = JSON.parse(localStorage.getItem('user'))

    return (
        <div>
            <Navbar />

            <div className='container mx-auto px-4 pb-20'>
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
