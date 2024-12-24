import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

const handleAddService = (e)=>{
    e.preventDefault();

    const imageUrl = e.target.imageUrl.value;
    const serviceName = e.target.serviceName.value;
    const price = e.target.price.value;
    const serviceArea = e.target.serviceArea.value;
    const description = e.target.description.value;

const addedServices = {imageUrl,serviceName,price,serviceArea,description};

fetch('http://localhost:5000/services', {
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({...addedServices, providerName: user?.displayName, providerImage: user?.photoURL, providerEmail: user.email})
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
            navigate("/services");
        }
    })
    .catch(err=>{
       toast.error("Failed To Add")
    })

}


    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-5 text-center font-headingFont text-[#004d4f]">Add Service Form</h2>
      <form 
      onSubmit={handleAddService}
      className="flex flex-col gap-4">
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL of the Service"
          className="input input-bordered w-full border-3 border-[#004d4f]"
        />
        <input
          type="text"
          name="serviceName"
          placeholder="Service Name"
          className="input input-bordered w-full border-3 border-[#004d4f]"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full border-3 border-[#004d4f]"
        />
        <input
          type="text"
          name="serviceArea"
          placeholder="Service Area"
          className="input input-bordered w-full border-3 border-[#004d4f]"
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full border-3 border-[#004d4f]"
        />
        <input type="submit" value="Add Service" className="btn btn-block bg-[#004d4f] hover:border-3 hover:border-[#004d4f] hover:bg-white hover:text-[#004d4f] text-white" />
      </form>
    </div>

    );
};

export default AddService; 