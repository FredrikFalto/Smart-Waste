import React from 'react'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

import './navbar.css'

import MagnifierIcon from '../../img/MagnifierIcon.svg'
import PlusIcon from '../../img/PlusIcon.svg'
import ProfileIcon from '../../img/ProfileIcon.svg'

const Navbar = () => {
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
                    <a href='/newlisting' className='flex flex-col'>
                        <img src={PlusIcon} alt='Plus' id='navIcon' />
                        Ny annons
                    </a>
                </li>
                <li>
                    <a href='/profile' className='flex flex-col'>
                        <img src={ProfileIcon} alt='Profile' id='navIcon' />
                        Min Profil
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
