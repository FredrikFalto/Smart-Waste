import React from 'react';

import './listings.css';

import Meat from '../../img/Mobile/CategoryMeatMobile.svg';
import Vegetarian from '../../img/Mobile/CategoryVegetarianMobile.svg';
import Fish from '../../img/Mobile/CategoryFishMobile.svg';
import Chicken from '../../img/Mobile/CategoryChickenMobile.svg';

import Navbar from '../../components/navbar/navbar';
import Searchbar from '../../components/searchbar/searchbar';

const Listings = () => {
    return (
        <div>
            <Searchbar />
            <Navbar />
            <hr class="my-1 h-px bg-gray-200 border-0 shadow" />

            <h3 className="ml-2 text-lg">Vad är du sugen på?</h3>

            <div className="flex flex-row overflow-x-auto mx-1 gap-1">
                <a href="">
                    <img src={Meat} alt="Kött" className="card card-item p-0" />
                </a>
                <a href="">
                    <img
                        src={Vegetarian}
                        alt="Vegetariskt"
                        className="card p-0"
                    />
                </a>
                <a href="">
                    <img src={Fish} alt="Fisk" className="card p-0" />
                </a>
                <a href="">
                    <img src={Chicken} alt="Kyckling" className="card p-0" />
                </a>
                <a href="">
                    <img src={Chicken} alt="Kyckling" className="card p-0" />
                </a>
            </div>

            <div className="flex flex-row overflow-x-auto mx-1 gap-1 category-card-row">
                <img src={Meat} alt="Kött" className="card p-0" />
                <img src={Vegetarian} alt="Vegetariskt" className="card p-0" />
                <img src={Fish} alt="Fisk" className="card p-0" />
                <img src={Chicken} alt="Kyckling" className="card p-0" />
            </div>
        </div>
    );
};

export default Listings;
