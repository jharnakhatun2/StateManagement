import React from 'react';

const Child = ({count, setCount}) => {
    return (
            <div className="rounded bg-green-300 w-52  lg:w-1/4 p-10 mx-auto my-10 text-center overflow-hidden">
                <h1 className="text-7xl">{count}</h1>
                <h1 className="text-sm">Child</h1>
                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 
                justify-between  w-full">
                    <button className="btn btn-sm text-center" onClick={()=>setCount(prevState => prevState - 1)}>Decrement</button>
                    <button className="btn btn-sm" onClick={()=>setCount(prevState => prevState + 1)}>Increment</button>
                </div>
            </div>
    );
};

export default Child;