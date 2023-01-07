import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import InfoCards from '../InfoCards/InfoCards';
import ReviewForm from '../ReviewForm/ReviewForm';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <ExtraSection />
            <Testimonials />
            <ReviewForm />
        </div>
    );
};

export default Home;