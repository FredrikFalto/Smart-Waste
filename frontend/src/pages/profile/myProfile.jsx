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

    const loggedInUser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {}, [])

    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-1 place-items-center container mx-auto px-4 pb-20'>
                {user && (
                    <div className='grid grid-cols-1'>
                        <span>{user.email}</span>
                        <button
                            className='bg-slate-400 rounded-md text-white mt-1'
                            id='profile-button'
                        >
                            Mina annonser
                        </button>
                        <button
                            className='bg-slate-400 rounded-md text-white mt-1'
                            id='profile-button'
                            onClick={handleClick}
                        >
                            Logga ut
                        </button>
                    </div>
                )}

                {!user && (
                    <div>
                        <h1 className='text-xl w-full'>
                            Du måste logga in för att se din profil
                        </h1>
                        <button className='bg-slate-400 rounded-md text-white mt-1 w-full h-10'>
                            <a href='/'>Logga in</a>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyProfile
