import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginAnimation from '../assets/animaiton/login.json'
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';


const Login = () => {
    const {userLogin,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginUser = (e)=> {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email,password)
        .then((result)=>{
            const user = result.user;
            // console.log(user);
            setUser(user);
            toast.success("You have successfully logged in!!")
          navigate(location?.state ? location.state : "/");
        })
        .catch((error)=>{
            toast.error(error);
        })
    }
    return (
        <div className="min-h-screen grid lg:grid-cols-2 justify-center items-center bg-gray-50">
        
        <div className=''>
            <Lottie className='w-10/12' animationData={loginAnimation}></Lottie>
        </div>

        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-md p-10 rounded-none">
            <h1 className="font-semibold text-center text-3xl">Login Form</h1>
            <form 
            onSubmit={handleLoginUser}
             className="card-body ">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
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
                    <button className="btn bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">Login</button>
                </div>
            </form>
            <p className="text-center font-medium">Don't have an account? <Link className="text-blue-700" to="/signup">Please Signup!!</Link></p>
            <p>
                <button 
                // onClick={handleLoginWithGoogle} 
                className="btn btn-ghost border-gray-400 w-full my-3"> <img className='w-9' src="https://img.icons8.com/?size=100&id=KF0a7tvdESBd&format=png&color=000000" alt="" />Google</button>
            </p>
        </div>
    </div>
    );
};

export default Login;