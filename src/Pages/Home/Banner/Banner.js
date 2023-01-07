import React from 'react';
import topImage from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={topImage} alt='' className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-xl md:text-5xl text-black font-bold">BEAUTY SALON
                        <br />FOR EVERY WOMEN
                    </h1>
                    <p className="py-6 text-xs md:text-sm text-gray-500">A beauty parlour is a place <br /> where people can go to have beauty treatments,<br /> for example to have their hair, <br /> nails or make-up done.</p>
                    <button className="btn btn-sm btn-primary">Get an Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;