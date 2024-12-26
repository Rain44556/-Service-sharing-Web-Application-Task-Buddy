import React from 'react';
import Banner from '../components/Banner';
import PopularServices from '../components/popularServices';
import SuccessStories from '../components/SuccessStories';
import MasterTrending from '../components/MasterTrending';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularServices></PopularServices>
           <MasterTrending></MasterTrending>
           <SuccessStories></SuccessStories>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;