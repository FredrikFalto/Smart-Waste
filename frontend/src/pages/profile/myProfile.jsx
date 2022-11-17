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
        window.location.replace(`/`)
    }

    const clickMyListings = () => {
        window.location.replace(`/profile/mylistings`)
    }

    // useEffect(() => {}, [])

    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-1 place-items-center container mx-auto px-4 pb-20'>
                {user && (
                    <div className='grid grid-cols-1 w-full mt-80'>
                        <span className='text-xl text-center'>
                            Inloggad som:
                        </span>
                        <span className='text-xl text-center'>
                            {user.email}
                        </span>
                        <button
                            className='bg-green-600 rounded-md text-white mt-20 w-full'
                            id='profile-button'
                            onClick={clickMyListings}
                        >
                            Mina annonser
                        </button>
                        <button
                            className='border-red-600 text-red-600 rounded-md mt-1 w-full hover:bg-red-600 hover:text-white'
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
