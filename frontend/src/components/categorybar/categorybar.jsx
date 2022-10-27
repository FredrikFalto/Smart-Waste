import React from 'react';

import Meat from '../../img/Mobile/CategoryMeatMobile.svg';
import Vegetarian from '../../img/Mobile/CategoryVegetarianMobile.svg';
import Fish from '../../img/Mobile/CategoryFishMobile.svg';
import Chicken from '../../img/Mobile/CategoryChickenMobile.svg';

const Categorybar = () => {
    return (
        <div className="flex flex-row overflow-x-auto mx-1 gap-1 pb-1">
            <div>
                <button>
                    <img src={Meat} alt="Kött" className="max-w-none" />
                </button>
            </div>
            <div>
                <button>
                    <img
                        src={Vegetarian}
                        alt="Vegetariskt"
                        className="max-w-none"
                    />
                </button>
            </div>
            <div>
                <button>
                    <img src={Fish} alt="Fisk" className="max-w-none" />
                </button>
            </div>
            <div>
                <button>
                    <img src={Chicken} alt="Kyckling" className="max-w-none" />
                </button>
            </div>
        </div>
    );
};

export default Categorybar;
