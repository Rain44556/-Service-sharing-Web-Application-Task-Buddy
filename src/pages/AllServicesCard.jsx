import React from 'react';
import { Link } from 'react-router-dom';

const AllServicesCard = ({service}) => {
    const { _id, serviceImage, serviceName, serviceDescription, serviceArea, serviceProvider, providerImage, providerName, servicePrice } = service;
    // console.log(service)
    return (
        <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start'>
            
            <img
                src={serviceImage}
                alt={serviceName}
                className="w-full h-[290px] md:w-[440px] rounded-lg mb-4 md:mb-0 md:mr-6 object-cover"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {serviceName}
                </h2>
                <p className="text-gray-600 mb-4">{serviceDescription.slice(0,100) + "...."}</p>

                <div className="flex items-center mb-4">
                  <img
                    src={serviceProvider.providerImage}
                    alt={serviceProvider.providerName}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {serviceProvider.providerName}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {serviceArea}
                        </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-teal-700">
                    {servicePrice} BDT
                  </p>
                </div>
               <Link to={`/singleServiceDetails/${_id}`}> <button className="btn px-4 py-2 w-full hover:border-2 hover:border-[#004d4f] hover:text-teal-900 font-bodyFont font-bold mt-4 rounded-lg text-white bg-[#166366] hover:bg-[#618a8c]">
                    View Details
                  </button></Link>
              </div>

        </div>
    );
};

export default AllServicesCard;