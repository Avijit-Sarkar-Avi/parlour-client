import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinment = ({ selectedDate }) => {

    const [appoinmentOptions, setAppoinmentOptions] = useState([]);
    const [treatment, setTreatement] = useState(null)

    useEffect(() => {
        fetch('appoinmentOptions.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-black text-xl'>Available Appoinment on <span className='text-primary font-bold'>{format(selectedDate, 'PP')}</span></p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appoinmentOptions?.map(option => <AppoinmentOption
                        key={option.id}
                        option={option}
                        setTreatement={setTreatement}
                    ></AppoinmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    setTreatement={setTreatement}
                    treatment={treatment} />
            }
        </section>
    );
};

export default AvailableAppoinment;