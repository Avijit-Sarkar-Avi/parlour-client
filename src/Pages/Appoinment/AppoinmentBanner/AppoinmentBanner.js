import React from 'react';
import imageBanner from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
import { DayPicker } from 'react-day-picker';

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {



    return (
        <header>
            <div className="hero my-6 text-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={imageBanner} alt='' className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;