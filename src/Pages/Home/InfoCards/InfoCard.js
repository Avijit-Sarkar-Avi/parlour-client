import React from 'react';

const InfoCard = ({ card }) => {
    const { name, price, description, icon } = card;
    return (
        <div className="card card-side text-black shadow-2xl pt-6 pb-6">
            <div className="card-body">
                <figure><img className='w-16' src={icon} alt="Movie" /></figure>
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <h2 className="text-primary text-center font-bold">${price}</h2>
                <p className='text-center'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;