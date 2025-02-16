import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLoaderData, useNavigate } from 'react-router-dom';

const BookService = () => {
    const {user} = useContext(AuthContext);
    // const [bookedServices, setBookedServices] = useState([]);
    const navigate = useNavigate();


 const bookedServices = useLoaderData();


useEffect(()=>{
    console.log(bookedServices)
}, [])

  
const handleBookedServices = (e)=>{
e.preventDefault();

const serviceId = e.target.serviceId.value;
const serviceName = e.target.serviceName.value;
const serviceImage = e.target.serviceImage.value;
const providerEmail = e.target.providerEmail.value;
const providerName = e.target.providerName.value;
const currentUserEmail = e.target.currentUserEmail.value;
const currentUserName = e.target.currentUserName.value;
const serviceDate = e.target.serviceDate.value;
const specialInstruction = e.target.specialInstruction.value;
const servicePrice = e.target.servicePrice.value;

const bookServices = {serviceId,serviceName,serviceImage,providerEmail,providerName,currentUserEmail,currentUserName,serviceDate,specialInstruction,servicePrice};

fetch('https://task-buddy-server-side.vercel.app/bookService', {
method: "POST",
credentials: 'include',
headers: {
    'content-type': 'application/json'
},
body: JSON.stringify({...bookServices, 
  serviceStatus: "pending",
  })
})
.then(res => {
    return res.json()})
.then(data => {
    if (data.insertedId) {
        Swal.fire({
            title: 'Success!',
            text: 'Successfully Added',
            icon: 'success',
            confirmButtonText: 'Added'
        })
        navigate("/bookedService");
    }
})
.catch(err=>{
   toast.error("Failed To Add")
})

}


    return (
        <div>
            <div 
                className="bg-white rounded-lg p-6 justify-center items-center dark:bg-[#16324F]">
                  <h2 className="text-2xl font-bold mb-4 font-headingFont text-center dark:text-[#FBBF24]">Book Your Choice!</h2>
                  <form onSubmit={handleBookedServices}>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold dark:text-[#FBBF24]">Service ID</label>
                      <input
                        type="text"
                        name='serviceId'
                        value={bookedServices._id}
                        className="w-full border-teal-800 border rounded-md bg-gray-200 cursor-not-allowed p-2 dark:text-[#838381] dark:bg-[#fff8e8]"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">Service Name</label>
                      <input
                        type="text"
                        name="serviceName"
                        value={bookedServices.serviceName}
                        className="w-full border-teal-800 border rounded-md bg-gray-200 cursor-not-allowed dark:text-[#838381] dark:bg-[#fff8e8] p-2"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">Service Image</label>
                      <input
                        type="text"
                        name="serviceImage"
                        value={bookedServices.serviceImage}
                        className="w-full border-teal-800 border rounded-md bg-gray-200 cursor-not-allowed dark:text-[#838381] dark:bg-[#fff8e8] p-2"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">Provider Email</label>
                      <input
                        type="text"
                        name="providerEmail"
                        value={bookedServices.serviceProvider.providerEmail}
                        className="w-full border-teal-800 border rounded-md bg-gray-200 cursor-not-allowed dark:text-[#838381] dark:bg-[#fff8e8] p-2"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">provider Name</label>
                      <input
                        type="text"
                        name="providerName"
                        value={bookedServices.serviceProvider.providerName}
                        className="w-full border-teal-800 border rounded-md bg-gray-200 cursor-not-allowed dark:text-[#838381] dark:bg-[#fff8e8] p-2"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">Current User Email</label>
                      <input
                        type="text"
                        name="currentUserEmail"
                        value={user.email}
                        className="w-full border-teal-800 border rounded-md bg-gray-200 cursor-not-allowed dark:text-[#838381] dark:bg-[#fff8e8] p-2"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">current  User Name</label>
                      <input
                        type="text"
                        name="currentUserName"
                        value={user.displayName}
                        className="w-full border-teal-800 border rounded-md bg-gray-200 cursor-not-allowed dark:text-[#838381] dark:bg-[#fff8e8] p-2"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">Service Taking Date</label>
                      <input
                        type="date"
                        name="serviceDate"
                        className="w-full border-teal-800 border rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">Special Instruction</label>
                      <textarea
                        name="specialInstruction"
                        className="w-full border-teal-600 rounded-md border h-24"
                        placeholder="Enter any special instructions..."
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-[#FBBF24] font-semibold">Price</label>
                      <input
                        type="text"
                        name='servicePrice'
                        value={bookedServices.servicePrice}
                        className="w-full rounded-md bg-gray-200 cursor-not-allowed dark:text-[#838381] dark:bg-[#fff8e8] p-2 border-teal-800 border"
                        readOnly
                      />
                    </div>
                   <input type="submit" value="Purchase" className="btn btn-block bg-[#004d4f] hover:border-3 hover:border-[#004d4f] hover:bg-white hover:text-[#004d4f] text-white " />
                  </form>
                </div>
              
       </div>
    );
};

export default BookService;


