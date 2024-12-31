import React, { useEffect, useState } from 'react';
import PopularServicesCard from './popularServicesCard';
import { Link } from 'react-router-dom';

const PopularServices = () => {
    const [popularServices, setPopularService] = useState([]);

    useEffect(()=>{
        fetch('https://task-buddy-server-side.vercel.app/services/popular')
        .then(res => res.json())
        .then(data => {
            setPopularService(data);
        })
    }, [])

    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold font-headingFont text-center mb-6 text-[#004d4f]'>Our Most Popular Services</h1>
            <p className='font-bodyFont text-md text-[#858383] mb-10 text-center px-10'>Uncover the services that learners trust and admire the most, and take the first meaningful step toward achieving your educational and personal growth goals with Task Buddy. Let us guide you on your journey to success with offerings designed to inspire, support, and empower you every step of the way!</p>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5'>
           {
                popularServices.map(popularService =><PopularServicesCard
                key={popularService._id}
                popularService={popularService}
                ></PopularServicesCard>)
            }
           </div>
           <div className='flex justify-center mt-10'>
            <Link to="/services"><button className='btn w-96 bg-[#004d4f] hover:bg-[#003e3f] text-white px-6 py-8 rounded-lg' >Show All Services</button></Link>
           </div>
        </div>
    );
};

export default PopularServices;