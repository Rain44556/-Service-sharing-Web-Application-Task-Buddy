import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signupAnimation from '../assets/animaiton/signup.json'
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';

const SignUp = () => {
    const {UserSignup,setUser} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignupUser = (e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const checkUpperCase = /[A-Z]/;
        if(!checkUpperCase.test(password)){
            toast.warning('At least one capital letter is required!')
        }

        const checkLowerCase = /[a-z]/;
        if(!checkLowerCase.test(password)){
            toast.warning('At least one lowercase letter is required!')
        }


        UserSignup(email, password)
        .then(result =>{
            const user = result.user;
            // console.log(user);
            setUser(user);
            toast.success("Successfully Signup!!");
            updateProfileUser({displayName: name, photoURL: photo})
            .then(()=>{
                navigate("/")
            }).catch(err => {
                toast(err);
            })

        })
        .catch((error)=>{
            toast.error(error.message);
        })

    }



    return (
        <div className="min-h-screen grid lg:grid-cols-2 justify-center items-center bg-gray-50">
        
        
        <div>
            <Lottie animationData={signupAnimation}></Lottie>
        </div>

        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-md p-10 rounded-none">
            <h1 className="font-semibold text-center text-3xl">Signup!</h1>
            <form 
            onSubmit={handleSignupUser}
             className="card-body ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type="photo" placeholder="photo-url" className="input input-bordered" required />
                </div>

                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required />
               
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">Signup</button>
                </div>
            </form>
            <p className="text-center font-medium">Already have an account? <Link className="text-blue-700" to="/login">Please Login!!</Link></p>
            <p>
                <button 
                // onClick={handleLoginWithGoogle} 
                className="btn btn-ghost border-gray-400 w-full my-3"> <img className='w-9' src="https://img.icons8.com/?size=100&id=KF0a7tvdESBd&format=png&color=000000" alt="" />Google</button>
            </p>
        </div>
    </div>
    );
};

export default SignUp;