import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageServicesCard = ({ manageService, handleDelete }) => {

    const { _id,
        serviceImage,
        serviceName,
        serviceDescription,
        serviceArea,
        servicePrice } = manageService;
        const navigate = useNavigate();


    //Modal For Edit services
    const [openUpdatedModal, setOpenUpdatedModal] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '500px',
            background: '#c7dede',
            border: 'rounded'
        },
    };

    function openModal() {
        setOpenUpdatedModal(true);
    }

    function closeModal() {
        setOpenUpdatedModal(false);
    }

    const handleEdit = () => {
        openModal();
        setOpenUpdatedModal(true);
    }

    
    const handleUpdatedServices =(e) => {
        e.preventDefault();
    const updatedService = {
                serviceName: e.target.serviceName.value,
                serviceDescription: e.target.serviceDescription.value,
                servicePrice: e.target.servicePrice.value,
            };

    fetch(`https://task-buddy-server-side.vercel.app/services/${_id}`,{
        method: 'PUT',
        credentials: 'include',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedService)
      })
      .then(res=> res.json())
      .then(data => {
        if(data.modifiedCount>0){
            Swal.fire({
                text: 'Successfully Edited',
                icon: 'success',
                confirmButtonText: 'Updated'
            })
            navigate("/services");
            closeModal();
        }
      })
    }



    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm border hover:shadow-2xl transition-shadow">
            <img
                src={serviceImage}
                alt={serviceName}
                className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="text-xl font-bold mt-4 text-gray-800">
                {serviceName}
            </h2>
            <p className="text-gray-600 mt-2">{serviceDescription}</p>
            <p className="text-md text-teal-800">$ {servicePrice}</p>


            <div className="flex flex-col justify-between mt-4">

                <button
                    onClick={() => handleEdit(_id)}
                    className="bg-teal-800 mb-2 flex justify-center items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-teal-900">
                    Edit <MdEdit size={22} /></button>

                {/* Modal for Editing */}
                <Modal
                    isOpen={openUpdatedModal}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">



                    <h3 className="text-xl font-bold mb-4">Update Your Service</h3>
                    <form
                    onSubmit={handleUpdatedServices}
                    >
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Service Name</label>
                            <input
                                type="text"
                                name="serviceName"
                                defaultValue={serviceName}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Description</label>
                            <textarea
                                name="serviceDescription"
                                defaultValue={serviceDescription}
                                className="w-full border rounded-lg px-3 py-2"
                                rows="3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Price</label>
                            <input
                                type="text"
                                name="servicePrice"
                                defaultValue={servicePrice}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                                Cancel</button>
                            <input
                                type="submit"
                                value="Save Changes"
                                className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                               
                            </input>
                        </div>
                    </form>


                </Modal>

                <button
                    onClick={() => handleDelete(_id)}
                    className="bg-teal-700 text-white flex justify-center items-center gap-2 px-4 py-2 rounded-lg hover:bg-teal-800">
                    Delete <MdDelete size={22} /></button>
            </div>
        </div>
    );
};

export default ManageServicesCard;


