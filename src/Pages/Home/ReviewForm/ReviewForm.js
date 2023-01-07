import React from 'react';

const ReviewForm = () => {
    return (
        <div className='mt-24'>
            <div className='flex justify-center items-center'>
                <h2 className='text-3xl text-black font-bold'>
                    Let us handle your <br />
                    project, professionally.</h2>
            </div>
            <div className="card flex-shrink-0 md:w-1/2 shadow-2xl mx-auto mt-24 text-black mb-24">
                <form className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" className="input input-primary input-bordered md:w-72" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Position</span>
                            </label>
                            <input type="text" placeholder="Position" className="input input-primary input-bordered md:w-72" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-primary input-bordered md:w-72" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Ratting</span>
                            </label>
                            <input type="text" placeholder="Ratting" className="input input-primary input-bordered md:w-72" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered textarea-primary" placeholder="Write your message..."></textarea>
                    </div>
                    <div className="form-control mt-6 mx-auto">
                        <button className="btn w-32 btn-sm btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;