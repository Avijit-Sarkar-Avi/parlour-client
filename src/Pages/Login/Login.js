import React from 'react';
import imagetop from '../../assets/logo.png'
import imageGoogle from '../../assets/icons/Group 573.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    return (
        <div className='mt-5'>
            <div className='flex justify-center items-center mb-5'>
                <img src={imagetop} alt="" className='w-32' />
            </div>
            <div className="card flex-shrink-0 md:w-1/2 shadow-2xl mx-auto text-black">
                <div className='mx-auto text-2xl font-bold'>
                    LogIn With
                </div>
                <form className="card-body mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" placeholder="Enter email" className="input input-primary input-bordered md:w-72" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-primary input-bordered md:w-72" />
                    </div>
                    <div className="form-control mt-2 mx-auto">
                        <button className="btn w-20 btn-sm btn-primary">LogIn</button>
                    </div>
                    <p>
                        Don't have an account? <Link to='/registration' className='text-primary'>Create An Account</Link>
                    </p>
                </form>
                <div className='mx-auto mb-10'>
                    <button className="btn btn-outline btn-primary md:w-72 rounded-full">
                        <img src={imageGoogle} className='w-5' alt="" />
                        <span className='ml-5'>Continue With Google</span>
                    </button>
                </div>
                <div className='mx-auto mb-10'>
                    <button className="btn btn-outline btn-primary md:w-72 rounded-full">
                        <FaFacebook />
                        <span className='ml-5'>Continue With Facebook</span>
                    </button>

                </div>
            </div>
        </div >
    );
};

export default Login;