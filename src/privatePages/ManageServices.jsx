import React, { useContext, useEffect, useState } from 'react';
import ManageServicesCard from './ManageServicesCard';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageServices = () => {
    const {user} = useContext(AuthContext);
    const [ManageServices, setManageServices] = useState([]);
    
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/userServices?email=${user.email}`,{
            withCredentials: true
        })
        .then(res => setManageServices(res.data))
    }, [user.email])


    //Delete button functionality
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/services/${id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                icon: "success"
                            });
                          
                            const serviceRemaining = ManageServices.filter(service => service._id !== id);
                            setManageServices(serviceRemaining);
                            navigate("/services");
                        }
                    })
            }
        })
    }
    
    return (
        <div className=' bg-gray-100 py-10 dark:bg-[#0A192F] min-h-screen'>

        <div className='max-w-6xl mx-auto'>
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-700 font-headingFont dark:text-[#FFC107]">
          Manage Services
        </h1>
        <p className='text-center mb-6 text-yellow-200'>Here you can edit, modify update and delete your services!!</p>
         <div className="font-bodyFont grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
         {
                ManageServices.map(manageService => <ManageServicesCard
                    key={manageService._id}
                    manageService={manageService}
                    handleDelete={handleDelete}
                >
                </ManageServicesCard>)
            }
         </div>
        </div>
    </div>
    );
};

export default ManageServices;