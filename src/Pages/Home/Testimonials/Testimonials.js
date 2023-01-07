import React from 'react';
import imageOne from '../../../assets/images/Ellipse 90.png';
import imageTwo from '../../../assets/images/Ellipse 91.png';
import imageThree from '../../../assets/images/Ellipse 92.png';
import Testimonial from './Testimonial';

const Testimonials = () => {

    const reviews = [
        {
            id: 1,
            name: 'Nash Patrik',
            image: imageOne,
            position: 'CEO, Manpol',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            id: 2,
            name: 'Niriam Barron',
            image: imageTwo,
            position: 'CEO, Manpol',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            id: 3,
            name: 'Bria Malone',
            image: imageThree,
            position: 'CEO, Manpol',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
    ]

    return (
        <div>
            <h2 className='text-2xl font-bold text-black text-center mt-24 mb-16'>Testimonials</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Testimonial
                        key={review.id}
                        review={review}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;