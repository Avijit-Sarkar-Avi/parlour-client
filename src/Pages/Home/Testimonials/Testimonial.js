import React from 'react';

const Testimonial = ({ review }) => {
    const { name, image, position, message } = review;
    return (
        <div className="card card-side text-black shadow-2xl pt-6 pb-6">
            <div className="card-body">
                <div className='flex space-x-6'>
                    <figure><img className='w-12' src={image} alt="Movie" /></figure>
                    <div>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <h2 className="text-xs font-bold">{position}</h2>
                    </div>
                </div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Testimonial;