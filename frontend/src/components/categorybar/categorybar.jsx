import React from 'react';

import Meat from '../../img/Mobile/CategoryMeatMobile.svg';
import Vegetarian from '../../img/Mobile/CategoryVegetarianMobile.svg';
import Fish from '../../img/Mobile/CategoryFishMobile.svg';
import Chicken from '../../img/Mobile/CategoryChickenMobile.svg';

const Categorybar = () => {
    return (
        <div className="flex flex-row overflow-x-auto mx-1 gap-1 category-card-row">
            <div>
                <a href="/listings">
                    <img src={Meat} alt="Kött" className="" />
                </a>
            </div>
            <div>
                <a href="/listings">
                    <img src={Vegetarian} alt="Vegetariskt" className="" />
                </a>
            </div>
            <div>
                <a href="/listings">
                    <img src={Fish} alt="Fisk" className="" />
                </a>
            </div>
            <div>
                <a href="/listings">
                    <img src={Chicken} alt="Kyckling" className="" />
                </a>
            </div>
        </div>
    );
};

export default Categorybar;
