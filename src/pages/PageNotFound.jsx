import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import errorAnimation from '../assets/animaiton/404.json'


const PageNotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Lottie className='w-2/5' animationData={errorAnimation}></Lottie>
            <p className="text-3xl mb-6 font-bodyFont text-[rgb(14,87,101)] px-7">Whoops! We couldn’t find the page you’re looking for. Let’s get you back on track!</p>
            <Link
                to="/"
                className="bg-[rgb(14,87,101)] font-bodyFont text-white border-3 font-semibold text-md px-6 py-3 rounded-lg shadow-md"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default PageNotFound;