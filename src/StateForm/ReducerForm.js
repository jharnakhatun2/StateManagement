import React from 'react';

const ReducerForm = () => {
    return (
        <div className="flex justify-center">
            <form className="lg:w-1/2 sm:w-full shadow-xl p-10 lg:my-10 sm:my-5">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 my-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name :</span>
                    </label>
                    <input type="text" name="firstName" id="firstName" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name :</span>
                    </label>
                    <input type="text" name="lastName" id="lastName" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 my-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email :</span>
                    </label>
                    <input type="text" name="email" id="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control flex justify-center">
                    <label className="label">
                        <span className="label-text">Gender :</span>
                    </label>
                    <div className="flex gap-3">
                        <div>
                            <input type="radio" id="male" name="gender" value="male"/>
                            <label htmlFor="male" className="px-2">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="female"/>
                            <label htmlFor="female" className="px-2">Female</label>
                        </div>
                        <div>
                            <input type="radio" id="other" name="gender" value="other"/>
                            <label htmlFor="other" className="px-2">Other</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 items-center my-4">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>SSC</option>
                        <option>HSC</option>
                        <option>Honors</option>
                        <option>MSC/MA</option>
                        <option>PHD</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number of PCs</span>
                    </label>
                    <div className="flex items-center">
                        <button className="btn btn-info">+</button>
                        <div className="w-1/2 text-center border py-2"><span>0</span></div>
                        <button className="btn btn-info">-</button>
                    </div>
                </div>
            </div>
            <div className="form-control my-4">
                <label className="label">
                    <span className="label-text">Feedback</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" name="message" id="message" placeholder="message"></textarea>
            </div>
            <div className="flex justify-between items-center my-7">
                <div className="flex gap-2 items-center">
                    <input type="checkbox"  className="checkbox checkbox-sm" />
                    <label>
                        <span className="label-text">I agree to terms and conditions</span>
                    </label>
                </div>
                <button className="btn btn-info w-1/3">Submit</button>
            </div>
            </form>
        </div>
    );
};

export default ReducerForm;