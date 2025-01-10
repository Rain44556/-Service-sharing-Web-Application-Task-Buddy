import React from "react";
import {  FaFacebook, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=" font-bodyFont bg-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)] text-white py-10 px-20 mt-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://i.ibb.co.com/s9y146k/DALL-E-2024-12-23-11-29-26-A-modern-and-friendly-logo-design-for-an-educational-website-called-Task.webp"
            alt="Website Logo"
            className="w-28 mb-3 rounded-lg ml-5"
          />
          
          <p className="mt-2 text-gray-300 text-sm tracking-widest">
          Empowering minds with knowledge, inspiration, and opportunities, paving the way for growth and success, one meaningful step at a time!
          </p>
        </div>

      
        <div className="text-gray-300 tracking-widest items-center lg:ml-28">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#courses" className="transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" className="transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

 
        <div className="flex flex-col tracking-widest items-center">
          <h2 className="text-lg font-bold mb-4 text-gray-200">Connect With Us</h2>
          <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/bris-ty-b09707262/" className="hover:text-[rgb(189,194,195)] transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bris-ty-b09707262/" className="hover:text-[rgb(189,194,195)] transition">
                <FaFacebook size={24} />
              </a>
          </div>
        </div>
      </div>


      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} TaskBuddy. All rights reserved. | Created by the Task Buddy Team With Care.
        </p>
      </div>
    </div>
  );
};

export default Footer;
