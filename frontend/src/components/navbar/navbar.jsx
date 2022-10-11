import React from 'react';

import './navbar.css';

// import logo from '../../img/Logo.svg';
import ProductIcon from '../../img/ProdukterIcon.svg';
import PlusIcon from '../../img/PlusIcon.svg';
import MessagesIcon from '../../img/MessagesIcon.svg';
import ProfileIcon from '../../img/ProfileIcon.svg';

const Navbar = () => {
    return (
        <nav className="bg-white border border-gray-300 px-2 w-full fixed bottom-0 md:top-0">
            <ul className="flex flex-row my-1 justify-center">
                <li>
                    <a href="/home" className="m-1 flex flex-col">
                        <img src={ProductIcon} alt="" id="navIcon" />
                        Annonser
                    </a>
                </li>
                <li>
                    <a href="/home" className="m-1 flex flex-col">
                        <img src={PlusIcon} alt="" id="navIcon" />
                        Ny annons
                    </a>
                </li>
                <li>
                    <a href="/home" className="m-1 flex flex-col">
                        <img src={MessagesIcon} alt="" id="navIcon" />
                        Meddelanden
                    </a>
                </li>
                <li>
                    <a href="/home" className="m-1 flex flex-col">
                        <img src={ProfileIcon} alt="" id="navIcon" />
                        Min Profil
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
