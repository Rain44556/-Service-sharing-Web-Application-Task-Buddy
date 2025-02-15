import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginAnimation from '../assets/animaiton/login.json'
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';


const SignIn = () => {
    const {userSignIn,setUser,googleUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginUser = (e)=> {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userSignIn(email,password)
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

const handleGoogleUser = () =>{
        googleUser()
        .then((result)=>{
            const user = result.user;
            setUser(user);
            navigate("/");
        })
        .catch((error)=>{
            toast.error(error);
        })
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-2 justify-center items-center bg-gray-50 dark:bg-[#0A192F]">
        
        <div className=''>
            <Lottie className='w-10/12' animationData={loginAnimation}></Lottie>
        </div>

        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-md p-10 rounded-none dark:bg-[#004D40]">
            <h1 className="font-semibold text-center text-3xl font-headingFont text-[rgb(14,87,101)] dark:text-[#FFC107]">Sign In</h1>
            <form 
            onSubmit={handleLoginUser}
             className="card-body ">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-headingFont dark:text-yellow-400">Email</span>
                    </label>
                    <input name="email" 
                           type="email" 
                           placeholder="email" 
                           className="input input-bordered border-[rgb(14,87,101)] dark:text-green-950" 
                           required />
                </div>

                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text font-headingFont dark:text-yellow-400">Password</span>
                    </label>
                    <input name="password"
                        placeholder="password"
                        className="input input-bordered border-[rgb(14,87,101)] dark:text-green-950"
                        required />
               
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover dark:text-yellow-400">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[rgb(14,87,101)] dark:bg-[#F5F5F5] text-gray-100 font-bold hover:bg-white hover:border-2 hover:text-[rgb(14,87,101)] hover:border-[rgb(14,87,101)] dark:text-[rgb(14,87,101)]">Sign In</button>
                </div>
                <div className="divider dark:">OR</div>
            <p>
                <button 
                onClick={handleGoogleUser} 
                className="btn btn-ghost hover:bg-[rgb(14,87,101)] hover:text-gray-100 font-bold bg-white hover:border-3 text-[rgb(14,87,101)] border-[rgb(14,87,101)] w-full mb-4 dark:hover:border-yellow-400 dark:hover:text-[rgb(14,87,101)] dark:bg-white"> <img className='w-9' src="https://i.ibb.co.com/zrRYpv8/icons8-google-120.png" alt="" />Sign In With Google</button>
            </p>
            </form>
           
            <p className="text-center font-medium font-headingFont">Have no Account? <Link className="text-[rgb(14,87,101)] dark:text-yellow-400" to="/signup">Kindly Signup today!!!</Link></p>
        </div>
    </div>
    );
};

export default SignIn;