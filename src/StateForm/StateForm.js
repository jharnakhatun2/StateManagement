import React, { useState } from 'react';

const StateForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = event =>{
        event.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            password
        }
        
        console.log(data);
    }


    return (
        <div className=" bg-stone-300 p-10">
            <h1 className="text-center text-4xl font-semibold p-3 text-gray-800">Log In</h1>
            <div className=" w-full lg:w-1/4 mx-auto">
                <form onSubmit={submit}>
                <input onBlur={(e)=>setFirstName(e.target.value )} type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full m-2 " /> <br/>
                <input  onBlur={(e)=>setLastName(e.target.value )} name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full m-2" /> <br/>
                <input onBlur={(e)=>setEmail(e.target.value )} name="email" type="email" placeholder="Email" className="input input-bordered w-full m-2" /> <br/>
                <input onBlur={(e)=>setPassword(e.target.value )} name="password" type="password" placeholder="Password" className="input input-bordered w-full m-2" /> <br/>
                <button className="btn w-full m-2">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default StateForm;