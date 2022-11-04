import React from 'react'
import { useLogout } from '../../hooks/useLogout'

import './navbar.css'

// import logo from '../../img/Logo.svg';
import MagnifierIcon from '../../img/MagnifierIcon.svg'
import PlusIcon from '../../img/PlusIcon.svg'
import ProfileIcon from '../../img/ProfileIcon.svg'

const Navbar = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    return (
        <nav className='bg-white border border-gray-300 w-screen fixed bottom-0'>
            <ul className='flex flex-row mb-1 mt-2 justify-center'>
                <li className='mr-10'>
                    <a href='/listings' className='flex flex-col'>
                        <img src={MagnifierIcon} alt='Magnifier' id='navIcon' />
                        Annonser
                    </a>
                </li>
                <li className='mr-10'>
                    <a href='/home' className='flex flex-col'>
                        <img src={PlusIcon} alt='Plus' id='navIcon' />
                        Ny annons
                    </a>
                </li>
                <li>
                    <a href='/home' className='flex flex-col'>
                        <img src={ProfileIcon} alt='Profile' id='navIcon' />
                        Min Profil
                    </a>
                </li>
                <li>
                    <button
                        className='bg-slate-400 rounded-md text-white ml-4 mt-1'
                        id='logButton'
                        onClick={handleClick}
                    >
                        Log out
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
