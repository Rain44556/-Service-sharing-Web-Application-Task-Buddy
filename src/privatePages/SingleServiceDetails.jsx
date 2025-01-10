import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";

const SingleServiceDetails = () => {
    const singleServiceData = useLoaderData();
    const { _id, serviceImage, serviceName, serviceDescription, serviceArea,servicePrice, serviceProvider} = singleServiceData;

    return (
        <div className="bg-gradient-to-b from-[#EAF6F6] to-[#FDFCFB] min-h-screen">
      <div className="grid lg:grid-cols-4 gap-5 mx-auto px-6 py-12">


        {/* //-----Single Service Info------/ */}
        <div className="lg:col-span-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={serviceImage}
            alt={serviceName}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-[#284B63] font-headingFont mb-4">{serviceName}</h1>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">{serviceDescription} </p>
            <p className="text-2xl font-semibold text-[#3C6E71]">Price: {servicePrice} BDT</p>
            <Link to={`/bookService/${_id}`}> <button className="px-8 py-3 bg-[#3C6E71] text-white rounded-lg font-medium hover:bg-[#284B63] transition duration-300 w-full mt-4">Book Now</button></Link>
          </div>
        </div>

          {/* //-----Provider Info------// */}
          <div className=" items-center shadow-lg rounded-lg p-4 font-bodyFont bg-[#bdc2c3]">
          <h1 className='text-center font-headingFont border-b-2 border-[#3C6E71] font-bold text-lg mt-10 mb-6'>Provider Information</h1>
          <img
            src={serviceProvider.providerImage}
            alt={serviceProvider.providerName}
            className="object-cover rounded-lg border-2 border-[#3C6E71]"
          />
          <div className="text-center mt-8">
            <h2 className="text-2xl text-[#284B63]"><span className='font-bold font-headingFont'>Name:</span> {serviceProvider.providerName}</h2>
            <p className="text-[#3C6E71] justify-center mt-2 flex gap-2"><IoLocationSharp size={25} /> 
              <span className="text-[#3C6E71]"> {serviceArea}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SingleServiceDetails;