import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Books from '../Books/Books';

const HomePage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <BannerSection></BannerSection>
           <Books></Books>
        </div>
    );
};

export default HomePage;