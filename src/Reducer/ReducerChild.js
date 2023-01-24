import React from 'react';
import ReducerGrandChild from './ReducerGrandChild';

const ReducerChild = () => {
    return (
        <div>
            <div className="rounded bg-red-500 w-52  lg:w-1/4 p-10 mx-auto my-10 text-center overflow-hidden">
                <h1 className="text-7xl">0</h1>
                {/* <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 
                justify-between mt-10 w-full">
                    <button className="btn btn-sm text-center" onClick={()=>setCount(prevState => prevState - 1)}>Decrement</button>
                    <button className="btn btn-sm" onClick={()=>setCount(prevState => prevState + 1)}>Increment</button>
                </div>  */}
            </div>
            <ReducerGrandChild/>
        </div>
    );
};

export default ReducerChild;