import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";

const SingleServiceDetails = () => {
    const singleServiceData = useLoaderData();
    const { _id, serviceImage, serviceName, serviceDescription, serviceArea, serviceProvider, providerImage, providerName, servicePrice } = singleServiceData;

    return (
        <div className="bg-gradient-to-b from-[#EAF6F6] to-[#FDFCFB] min-h-screen">
      <div className="container mx-auto px-6 py-12">


        {/* //-----Provider Info------// */}
        <div className="flex items-center mb-10 bg-white shadow-lg rounded-lg p-6">
          <img
            src={serviceProvider.providerImage}
            alt={serviceProvider.providerName}
            className="w-32 h-32 object-cover rounded-full border-4 border-[#3C6E71]"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-[#284B63]">{serviceProvider.providerName}</h2>
            <p className="text-[#3C6E71] mt-1 flex gap-2"><IoLocationSharp size={25} /> 
              <span className="text-[#3C6E71]"> {serviceArea}</span>
            </p>
          </div>
        </div>


        {/* //-----Single Service Info------/ */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={serviceImage}
            alt={serviceName}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-[#284B63] mb-4">{serviceName}</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{serviceDescription} </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-[#3C6E71]">Price: ${servicePrice}</p>
              <button className="px-8 py-3 bg-[#3C6E71] text-white rounded-lg font-medium hover:bg-[#284B63] transition duration-300">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SingleServiceDetails;