import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const menuLinks = <>
        <NavLink className="px-6 py-2 hover:text-white hover:bg-slate-800" to="/">Home</NavLink>
        <NavLink className="px-6 py-2 hover:text-white hover:bg-slate-800" to="/services">Services</NavLink>
    </>

    const dashBoardRoutes = <>
        {user && <>
            <NavLink className="px-6 py-2 hover:text-white hover:bg-slate-800" to="/AddService">Add Service</NavLink>
            <NavLink className="px-6 py-2 hover:text-white hover:bg-slate-800" to="/ManageServices">Manage Service</NavLink>
            <NavLink className="px-6 py-2 hover:text-white hover:bg-slate-800" to="/BookedService">Booked Service</NavLink>
            <NavLink className="px-6 py-2 hover:text-white hover:bg-slate-800" to="/ServiceToDo">Service To-Do</NavLink>
        </>
        }
    </>

const handleSignOutUser = () =>{
    userSignOut()
    .then(()=>{
        toast.success("Sign Out Successfully");
    })
    .catch(err =>{
        toast.error(err,'Failed to Sign Out');
    })
}

// Theme Implement
const [themeDark, setThemeDark] = useState(false);

useEffect(()=>{
    if(themeDark){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
}, [themeDark]);




    return (
        <div className="navbar font-headingFont mx-auto sticky top-0 z-50 backdrop-blur-md shadow-md lg:px-24">
            <div className="navbar-start">
                <Link to="/">
                    <img
                        className='w-20 rounded-full shadow-lg'
                        src="https://i.ibb.co.com/s9y146k/DALL-E-2024-12-23-11-29-26-A-modern-and-friendly-logo-design-for-an-educational-website-called-Task.webp"
                        alt="logo" />
                </Link>
            </div>

            <div className="navbar-center dark:dark:text-yellow-200 hidden lg:flex p-2 rounded-full font-semibold text-teal-700 ">
                <ul className="menu menu-horizontal px-1 ">
                    {menuLinks}

                    {/* Dashboard */}
                {
                    user && user?.email ?
                    (
                        <div className="dropdown dropdown-hover ">
                        <div tabIndex={0} role='button' className='px-6 py-2 hover:text-white hover:bg-slate-800'>Dashboard</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-[rgb(11,52,59)] rounded-box z-[1] w-52 p-2 shadow">
                            {dashBoardRoutes}
                        </ul>
                    </div>
                    ) : ""
                }

                </ul>
            </div>

            <div className="navbar-end">


                 {/* Toggle for Theme Customization */}
            <input 
            onClick={()=> setThemeDark(!themeDark)}
            type="checkbox" 
            className="toggle toggle-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)] mr-4" 
            defaultChecked />

                {/* dropdown menu for small  device */}
                <div className="dropdown mr-3 bg-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)]">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-[rgb(14,87,100)] rounded-box z-[1] mt-3 w-44 px-2 py-5 shadow font-bold">
                        {menuLinks}
                        {dashBoardRoutes}
                    </ul>
                </div>
                {/* dropdown end */}

                <ul className="menu menu-horizontal px-1 font-medium">
                    {user && user?.email ?

                        (<div className="flex">

                            <div role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>

                            <div className="justify-between p-2 mb-2">
                                {user?.displayName}
                            </div>

                            <div><button onClick={handleSignOutUser}
                                className="btn rounded-md bg-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)] hover:bg-gray-900 text-gray-50 ">
                                Sign Out</button></div>

                        </div>) :
                        <Link className="btn px-10 py-3 text-white bg-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)] mx-4 rounded-md" to="/signin">Sign In</Link>
                    }
                </ul>
            </div>


        </div>
    );
};

export default Navbar;