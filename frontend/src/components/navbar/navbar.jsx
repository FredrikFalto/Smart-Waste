import React from 'react';

import './navbar.css';

// import logo from '../../img/Logo.svg';
import MagnifierIcon from '../../img/MagnifierIcon.svg';
import PlusIcon from '../../img/PlusIcon.svg';
import ProfileIcon from '../../img/ProfileIcon.svg';

const Navbar = () => {
    return (
        <nav className="bg-white border border-gray-300 px-2 w-full fixed bottom-0 md:top-0">
            <ul className="flex flex-row mb-1 mt-2 justify-center">
                <li className="mr-10">
                    <a href="/listings" className="flex flex-col">
                        <img src={MagnifierIcon} alt="" id="navIcon" />
                        Annonser
                    </a>
                </li>
                <li className="mr-10">
                    <a href="/home" className="flex flex-col">
                        <img src={PlusIcon} alt="" id="navIcon" />
                        Ny annons
                    </a>
                </li>
                <li>
                    <a href="/home" className="flex flex-col">
                        <img src={ProfileIcon} alt="" id="navIcon" />
                        Min Profil
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
