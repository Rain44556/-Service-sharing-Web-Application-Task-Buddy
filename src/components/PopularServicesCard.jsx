import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const PopularServicesCard = ({popularService}) => {
    const { _id, serviceImage, serviceName, serviceDescription, viewDetailButton, serviceProvider, servicePrice } = popularService;
    return (
        <div className="border dark:border-[rgb(14,87,101)] rounded-lg shadow-md p-4 bg-white dark:bg-[rgb(14,87,101)]">
      <img
        src={serviceImage}
        alt={serviceName}
        className="w-full h-72 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold font-headingFont dark:text-yellow-100 text-gray-800">{serviceName}</h2>
        <p className="text-sm text-gray-600 mt-2 dark:text-gray-200">{serviceDescription.slice(0,100) + "...."}</p>
        <div className="flex items-center mt-4">
          <img
            src={serviceProvider.providerImage}
            alt={serviceProvider.providerName}
            className="w-10 h-10 rounded-full border object-cover"
          />
          <span className="ml-2 text-gray-700 dark:text-gray-200">{serviceProvider.providerName}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-[#004d4f] dark:text-yellow-300">Price: {servicePrice} BDT</span>
          <Link to={`/singleServiceDetails/${_id}`}><button className="text-[#004d4f] dark:text-yellow-300  px-4 py-2 rounded-md hover:text-[#007d80] transition duration-300 font-bold flex gap-2">{viewDetailButton}<FaArrowRight className='mt-1' size={20} /></button></Link>
        </div>
      </div>
    </div>
    );
};

export default PopularServicesCard;