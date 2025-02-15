import React, { useState } from 'react';
import AllServicesCard from './AllServicesCard';
import { useLoaderData } from 'react-router-dom';

const AllServices = () => {
    const servicesData = useLoaderData();
    const [services, setServices] = useState(servicesData);

    const searchService = (e) =>{
        e.preventDefault();

        const searchInput = e.target.value;
        const filteredService = [];

        servicesData.forEach(search => {
            if(search.serviceName.toLowerCase().indexOf(searchInput) !== -1){
                filteredService.push(search);
            }
        })
        setServices(filteredService)
    }


    return (
        <div className=' bg-gray-100 py-10 dark:bg-[#0A192F]'>
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-700 font-headingFont dark:text-[#FBBF24]">
          All Services
        </h1>
        <div className="form-control w-4/5 lg:w-3/5 mx-auto my-7">
            <input onChange={searchService} type="text" placeholder="Search" className="input input-bordered md:w-auto dark:bg-yellow-50" />
        </div>
        <div className='max-w-4xl mx-auto px-3'>
         <div className="space-y-6 font-bodyFont">
         {
                services.map(service => <AllServicesCard
                    key={service._id}
                    service={service}
                >
                </AllServicesCard>)
            }
         </div>
        </div>
    </div>
    );
};

export default AllServices;