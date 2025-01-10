import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';


const MainLayout = () => {

    const location = useLocation();

    useEffect(() => {
      const pageTitle = {
        "/": "Home | Task BBuddy",
        "/services": "All Services | Task Buddy",
        "/AddService": "Add Service | Task Buddy",
        "/ManageServices": "Manage Services | Task Buddy",
        "/singleServiceDetails/:id": "Single Service Details | Task Buddy",
        "/BookedService": "Booked Service | Task Buddy",
        "/ServiceToDo": "/Service To-DO | Task Buddy",
        "/signin": "Signin | Task Buddy ",
        "/signup": "Signup | Task Buddy ",
      };
  
      const currentPageTitle = pageTitle[location.pathname] || "Task Buddy"
      document.title = currentPageTitle;
    }, [location]);
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
          <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;