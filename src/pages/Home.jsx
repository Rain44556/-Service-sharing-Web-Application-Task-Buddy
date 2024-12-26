import React from 'react';
import Banner from '../components/Banner';
import PopularServices from '../components/popularServices';
import MasterTrending from '../components/MasterTrending';
import FAQ from '../components/FAQ';
import PersonalizedLearning from '../components/PersonalizedLearning';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularServices></PopularServices>
           <MasterTrending></MasterTrending>
           <PersonalizedLearning></PersonalizedLearning>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;