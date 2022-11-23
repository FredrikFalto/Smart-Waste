import React, { useEffect } from 'react'
import axios from 'axios'

import './myProfile.css'

import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

import Navbar from '../../components/navbar/navbar'

const MyProfile = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    const clickLogIn = () => {
        window.location = `/`
    }

    const clickMyListings = () => {
        window.location = `/profile/mylistings`
    }

    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-1 container mx-auto px-4 pb-20'>
                {user && (
                    <div className='grid grid-cols-1 w-full mt-80 place-items-center'>
                        <span className='text-xl text-center'>
                            Inloggad som:
                        </span>
                        <span className='text-xl text-center'>
                            {user.email}
                        </span>
                        <button
                            className='bg-green-600 rounded-md text-white mt-20 w-full md:w-4/5 lg:w-3/5 xl:w-2/6'
                            id='profile-button'
                            onClick={clickMyListings}
                        >
                            Mina annonser
                        </button>
                        <button
                            className='border-red-600 text-red-600 rounded-md mt-1 w-full hover:bg-red-600 hover:text-white md:w-4/5 lg:w-3/5 xl:w-2/6'
                            id='profile-button'
                            onClick={handleClick}
                        >
                            Logga ut
                        </button>
                    </div>
                )}

                {!user && (
                    <div className='mt-80'>
                        <h1 className='text-xl w-full'>
                            Du måste logga in för att se din profil
                        </h1>
                        <button
                            className='bg-green-600 rounded-md text-white w-full mt-20 h-10'
                            onClick={clickLogIn}
                        >
                            Logga in
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyProfile
