import React from 'react';

import logo from '../../img/Logo.svg';

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-900 px-2 w-full fixed sm:bottom-0 md:top-0">
            <ul className="flex flex-row p-4 mt-4 bg-gray-50 border items-stretch">
                <li>
                    <a href="#" className="m-5">
                        Annonser
                    </a>
                </li>
                <li>
                    <a href="#" className="m-5">
                        Ny annons
                    </a>
                </li>
                <li>
                    <a href="#" className="m-5">
                        Meddelanden
                    </a>
                </li>
                <li>
                    <a href="#" className="m-5">
                        Min Profil
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
