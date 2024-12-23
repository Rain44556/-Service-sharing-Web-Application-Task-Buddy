import React from "react";
import {  FaFacebook, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://i.ibb.co.com/s9y146k/DALL-E-2024-12-23-11-29-26-A-modern-and-friendly-logo-design-for-an-educational-website-called-Task.webp"
            alt="Website Logo"
            className="w-20 h-20 mb-3"
          />
          <h1 className="text-2xl font-extrabold tracking-widest text-teal-400">
          Task Buddy
          </h1>
          <p className="mt-2 text-gray-400 text-sm">
            Empowering minds, one step at a time.
          </p>
        </div>

      
        <div className="text-gray-300">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-[rgb(14,87,101)] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-[rgb(14,87,101)] transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[rgb(14,87,101)] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

 
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-lg font-bold mb-4">Connect with Us</h2>
          <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/bris-ty-b09707262/" className="hover:text-[rgb(14,87,100)] transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bris-ty-b09707262/" className="hover:text-[rgb(14,87,101)] transition">
                <FaFacebook size={24} />
              </a>
          </div>
        </div>
      </div>


      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} TaskBuddy. All rights reserved. | Created by the Task Buddy Team With Care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
