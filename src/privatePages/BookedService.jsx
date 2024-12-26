import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import Lottie from 'lottie-react';
import nodataAnimation from '../assets/animaiton/nodata.json'

const BookedService = () => {
    const {user} = useContext(AuthContext);
    const bookServicesData = useLoaderData();
    const [booked, setBooked] = useState([]);

    const {
        serviceName,
        serviceImage,
        serviceProvider,
        providerEmail,
        providerName,
        currentUserEmail,
        currentUserName,
        serviceDate,
        specialInstruction,
        servicePrice} = bookServicesData;

    useEffect(()=>{
        axios.get(`http://localhost:5000/bookService?email=${user.email}`,{
            withCredentials: true
        })
        .then(res => setBooked(res.data))
    }, [user.email])

    return (
            <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10 font-bodyFont">
              <h1 className="text-3xl font-bold text-teal-600 text-center mb-8 font-headingFont">
                My Booked Services
              </h1>
              {booked.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-10">
                  <Lottie animationData={nodataAnimation}></Lottie>
                  <h2 className="text-4xl font-medium text-teal-600">
                    You Have Not Booked Any Services Yet!
                  </h2>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {booked.map((service) => (
                    <div
                      key={service._id}
                      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
                    >
                      <img
                        src={serviceImage}
                        alt={serviceName}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                          {serviceName}
                        </h2>
                        <p className="text-gray-600 mb-4">Description: {specialInstruction}</p>
                        <p className="text-gray-600 mb-4">Purchase Date: {serviceDate}</p>
                          <span className="text-gray-700 text-sm">
                            {providerName}
                          </span>
                       

                        <p className="text-teal-600 font-semibold text-lg">
                          Price: ${servicePrice}
                        </p>
                        <button className="w-full mt-4 py-2 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-700 transition duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
    );
};

export default BookedService;