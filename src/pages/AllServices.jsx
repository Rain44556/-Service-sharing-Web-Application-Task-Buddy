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
        <div className=' bg-gray-100 py-10'>
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-700 font-headingFont">
          All Services
        </h1>
        <div className="form-control w-3/5 mx-auto my-7">
            <input onChange={searchService} type="text" placeholder="Search Your Services" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className='max-w-4xl mx-auto'>
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