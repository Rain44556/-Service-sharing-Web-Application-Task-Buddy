import React, { useContext, useEffect, useState } from 'react';
import ManageServicesCard from './ManageServicesCard';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const ManageServices = () => {
    const {user} = useContext(AuthContext);
    const [ManageServices, setManageServices] = useState([]);
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/userServices?email=${user.email}`)
        .then(res => res.json())
        .then(data => setManageServices(data))
    }, [])


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
                    method: 'DELETE'
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
        <div className=' bg-gray-100 py-10'>

        <div className='max-w-6xl mx-auto'>
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-700 font-headingFont">
          Manage Services
        </h1>
        <p className='text-center mb-6'>Here you can edit, modify update and delete your services!!</p>
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