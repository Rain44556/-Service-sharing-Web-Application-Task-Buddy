import React from 'react';
import { Link } from 'react-router-dom';

const PopularServicesCard = ({popularService}) => {
    const { serviceImage, serviceName, serviceDescription, viewDetailButton, serviceProvider, servicePrice } = popularService;
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={serviceImage}
        alt={serviceName}
        className="w-full h-72 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{serviceName}</h2>
        <p className="text-sm text-gray-600 mt-2">{serviceDescription}</p>
        <div className="flex items-center mt-4">
          <img
            src={serviceProvider.providerImage}
            alt={serviceProvider.providerName}
            className="w-10 h-10 rounded-full border"
          />
          <span className="ml-2 text-gray-700">{serviceProvider.providerName}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-[#004d4f]">{servicePrice}</span>
          <Link to="/signin"><button className="bg-[#004d4f] text-white px-4 py-2 rounded-md hover:bg-[#007d80] transition duration-300">
            {viewDetailButton}
          </button></Link>
        </div>
      </div>
    </div>
    );
};

export default PopularServicesCard;