import React from 'react';
import faceTreatment from '../../../assets/icons/Group 1373.png';
import hairColor from '../../../assets/icons/Group 1372.png';
import skinCare from '../../../assets/icons/Group 1374.png';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Anti Age Face Treatment',
            price: 199,
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            icon: faceTreatment
        },
        {
            id: 2,
            name: 'Hair Color & Styleing',
            price: 99,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            icon: hairColor
        },
        {
            id: 3,
            name: 'Skin Care Treatment',
            price: 299,
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            icon: skinCare
        }

    ]

    return (
        <div className='mx-5'>
            <h2 className='text-2xl font-bold text-black text-center mt-24 mb-24'>
                Our Awesome <span className='text-primary'>Services</span> </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cardData.map(card => <InfoCard
                        key={card.id}
                        card={card}
                    ></InfoCard>)
                }
            </div>

            <div className='flex justify-center items-center mt-24 mb-24'>
                <button className='btn btn-primary'>Explore More</button>
            </div>
        </div>
    );
};

export default InfoCards;