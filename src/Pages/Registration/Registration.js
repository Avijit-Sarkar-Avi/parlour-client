import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/logo.png'
import imageGoogle from '../../assets/icons/Group 573.png'

const Registration = () => {

    const imageHostingKey = process.env.REACT_APP_imgbb_key
    console.log(imageHostingKey)

    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.image.value;
        const position = form.position.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photoURL, position, email, password, confirmPassword)
    }

    return (
        <div className='mt-5'>
            <div className='flex justify-center items-center space-x-3'>
                <h2 className='text-3xl text-black font-bold'>Registration in</h2>
                <img src={imgLogo} alt="" className='w-24' />
            </div>
            <div className="card flex-shrink-0 md:w-1/2 shadow-2xl mx-auto">
                <form onSubmit={handleRegistration} className="card-body mx-auto text-black">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" name="name" className="input input-sm input-primary input-bordered md:w-72" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Image</span>
                        </label>
                        <input type="file" name='image' className="input input-sm input-primary input-bordered md:w-72" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Select Position</span>
                        </label>
                        <select name="position" placeholder='Select your position' className="select select-primary select-sm">
                            <option>Customer</option>
                            <option>Employee</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter Email" className="input input-sm input-primary input-bordered md:w-72" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter Password" className="input input-sm input-primary input-bordered md:w-72" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Confirm Password</span>
                        </label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-sm input-primary input-bordered md:w-72" />
                    </div>
                    <div className="form-control mt-6 mx-auto">
                        <button className="btn btn-sm md:w-72 btn-primary">Create An Account</button>

                        <p className='text-center'>Already have an account? <Link className='text-primary' to='/login'>Login</Link> </p>
                    </div>
                </form>
                <div className='mx-auto mb-5'>
                    <button className="btn btn-outline btn-primary md:w-72 rounded-full">
                        <img src={imageGoogle} className='w-5' alt="" />
                        <span className='ml-5'>Continue With Google</span>
                    </button>
                </div>
                <div className='mx-auto'>
                    <button className="btn btn-outline btn-primary md:w-72 rounded-full">
                        <FaFacebook />
                        <span className='ml-5'>Continue With Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;