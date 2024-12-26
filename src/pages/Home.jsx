import React from 'react';
import Banner from '../components/Banner';
import PopularServices from '../components/popularServices';
import LearnWithExperts from '../components/LearnWithExperts';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularServices></PopularServices>
           <LearnWithExperts></LearnWithExperts>
           <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;