import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Lottie from 'lottie-react';
import nodataAnimation from '../assets/animaiton/nodata.json'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const ServiceToDo = () => {
    const { user } = useContext(AuthContext);
    const [booked, setBooked] = useState([]);


    useEffect(() => {
        axios.get(`https://task-buddy-server-side.vercel.app/myService?email=${user.email}`, {
            withCredentials: true
        })
            .then(res => setBooked(res.data))
    }, [user.email])


    const handleStatusChange =(e,id) =>{
        e.preventDefault();

        const serviceStatus = e.target.value;

        fetch(`https://task-buddy-server-side.vercel.app/bookService/${id}`,{
            method: 'PUT',
            credentials: 'include',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify({serviceStatus})
        })
        .then(res=> res.json())
              .then(data => {
                if(data.modifiedCount>0){
                    Swal.fire({
                        text: 'Successfully Edited',
                        icon: 'success',
                        confirmButtonText: 'Updated'
                    }).then(()=>axios.get(`https://task-buddy-server-side.vercel.app/myService?email=${user.email}`, {
                        withCredentials: true
                    })
                        .then(res => setBooked(res.data))
                )
                }
              
              })
    }


    return (
        <div className="min-h-screen py-10 px-4 sm:px-10 font-bodyFont">
            <h1 className="text-3xl font-bold text-teal-600 dark:text-yellow-300 text-center mb-8 font-headingFont">
                Booked Services Status
            </h1>
            {booked.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-10">
                    <Lottie animationData={nodataAnimation}></Lottie>
                    <h2 className="text-4xl font-medium text-teal-600">
                        Have Not Booked Any Services Yet!
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
                                
                                <div className="text-gray-700 text-sm">
                                    <span className='font-semibold'>User Name : </span> {service.currentUserName}
                                </div>
                                <div className="text-gray-700 text-sm">
                                    <span className='font-semibold'>User Email : </span> {service.currentUserEmail}
                                </div>
                                <div>
                                <p className="text-teal-600 text-sm">
                                        <span className="font-semibold">Price : </span> ${service.servicePrice}
                                    </p>
                                    <span>
                                        <select
                                            onChange={(e)=> handleStatusChange(e,service._id)}
                                            value={service.serviceStatus}
                                            className="select mt-2 select-bordered w-full text-teal-900 max-w-xs border-teal-900">

                                            <option value="Working">Working</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Pending">Pending</option>
                                        </select>
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServiceToDo;