import React from 'react';
import faceImage from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
const ExtraSection = () => {
    return (
        <div className="hero">
            <div className="hero-content lg:space-x-20 flex-col lg:flex-row">
                <img src={faceImage} alt='' className="w-1/2 lg:w-1/3 rounded-lg shadow-2xl" />
                <div className='text-black'>
                    <h1 className="text-xl md:text-4xl font-bold">Let us handle your <br /> screen <span className='text-primary'>Professionally.</span> </h1>
                    <p className="py-6 text-sm">This being said, a facial is a set of skin <br /> care treatments for your face with the goal of
                        <br /> exfoliating your skin, removing impurities, and dead skin.
                        <br /> It is usually performed in beauty salons,
                        <br /> day spas, and even your dermatologist's office.</p>
                    <div className='flex justify-evenly'>
                        <div>
                            <h1 className='text-3xl font-bold text-primary'>500+</h1>
                            <p className='text-xs'>Happy Customer</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold text-primary'>16+</h1>
                            <p className='text-xs'>Total Service</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;