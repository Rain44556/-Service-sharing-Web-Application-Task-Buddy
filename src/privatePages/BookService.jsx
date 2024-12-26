import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BookService = () => {
    const {user} = useContext(AuthContext);
    const [bookedServices, setBookedServices] = useState([]);
    const navigate = useNavigate();


useEffect(()=>{
    axios.get(`https://task-buddy-server-side.vercel.app/userServices?email=${user.email}`,{
        withCredentials: true
    })
    .then(res => setBookedServices(res.data))
}, [user.email])

  
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

const bookedServices = {serviceId,serviceName,serviceImage,providerEmail,providerName,currentUserEmail,currentUserName,serviceDate,specialInstruction,servicePrice};

fetch('http://localhost:5000/bookService', {
method: "POST",
headers: {
    'content-type': 'application/json'
},
body: JSON.stringify({...bookedServices, 
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
        {
            bookedServices.map(bookedService =>
            (<div 
                key={bookedService._id}
                className="bg-white rounded-lg p-6 justify-center items-center">
                  <h2 className="text-2xl font-bold mb-4 font-headingFont text-center">Book Your Choice!</h2>
                  <form onSubmit={handleBookedServices}>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">Service ID</label>
                      <input
                        type="text"
                        name='serviceId'
                        value={bookedService._id}
                        className="w-full border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">Service Name</label>
                      <input
                        type="text"
                        name="serviceName"
                        value={bookedService.serviceName}
                        className="w-full border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">Service Image</label>
                      <input
                        type="text"
                        name="serviceImage"
                        value={bookedService.serviceImage}
                        className="w-full border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">Provider Email</label>
                      <input
                        type="text"
                        name="providerEmail"
                        value={bookedService.serviceProvider.providerEmail}
                        className="w-full border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">provider Name</label>
                      <input
                        type="text"
                        name="providerName"
                        value={bookedService.serviceProvider.providerName}
                        className="w-full border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">Current User Email</label>
                      <input
                        type="text"
                        name="currentUserEmail"
                        value={user.email}
                        className="w-full border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">current  User Name</label>
                      <input
                        type="text"
                        name="currentUserName"
                        value={user.displayName}
                        className="w-full border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">Service Taking Date</label>
                      <input
                        type="date"
                        name="serviceDate"
                        className="w-full border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">Special Instruction</label>
                      <textarea
                        name="specialInstruction"
                        className="w-full border-gray-300 rounded-md"
                        placeholder="Enter any special instructions..."
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold">Price</label>
                      <input
                        type="text"
                        name='servicePrice'
                        value={bookedService.servicePrice}
                        className="w-full border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                   <input type="submit" value="Purchase" className="btn btn-block bg-[#004d4f] hover:border-3 hover:border-[#004d4f] hover:bg-white hover:text-[#004d4f] text-white" />
                  </form>
                </div>
              )
            )
        }
       </div>
    );
};

export default BookService;


