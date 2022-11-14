import React from 'react'

import Navbar from '../../components/navbar/navbar'
import ListingForm from '../../components/listing/ListingForm'

const newListing = () => {
    return (
        <div>
            <Navbar />

            <div className='container mx-auto px-4 pb-20'>
                <ListingForm />
            </div>
        </div>
    )
}

export default newListing
