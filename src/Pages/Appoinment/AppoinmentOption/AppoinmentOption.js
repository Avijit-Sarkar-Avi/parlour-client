import React from 'react';

const AppoinmentOption = ({ option, setTreatement }) => {
    const { name, slots } = option;
    return (
        <div className="card w-96 text-black shadow-xl ">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setTreatement(option)} >
                        Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;