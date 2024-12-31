import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import Lottie from 'lottie-react';
import nodataAnimation from '../assets/animaiton/nodata.json'

const BookedService = () => {
    const {user} = useContext(AuthContext);
    const [booked, setBooked] = useState([]);

 

    useEffect(()=>{
        axios.get(`https://task-buddy-server-side.vercel.app/bookedService?email=${user.email}`,{
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
                        src={service.serviceImage}
                        alt={service.serviceName}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                          {service.serviceName}
                        </h2>
                        <p className="text-gray-600"><span className='font-semibold'>Description : </span> {service.specialInstruction}</p>
                        <p className="text-gray-600"><span className='font-semibold'>Purchase Date : </span> {service.serviceDate}</p>
                          <span className="text-gray-700 text-sm">
                          <span className='font-semibold'>Provider Name : </span> {service.providerName}
                          </span>
                       <div className='flex gap-5 mt-2'>
                       <span className="text-gray-700 text-sm border-2 rounded-full px-1 py-2 bg-gray-200">
                          Status: {service.serviceStatus}
                          </span>
                       

                        <p className="text-teal-600 text-sm border-2 rounded-full p-1 px-1 py-2 bg-gray-200">
                          Price: ${service.servicePrice}
                        </p>
                       </div>
                        
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
    );
};

export default BookedService;