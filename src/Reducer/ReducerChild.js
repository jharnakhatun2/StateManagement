import React from 'react';
import { useContext } from 'react';
import { counterContext } from '../Reducer/ReducerCounter';

const ReducerChild = () => {
    const countContext = useContext(counterContext);
    return (
        <div>
            <div className="rounded bg-red-500 w-52  lg:w-1/4 p-10 mx-auto my-10 text-center overflow-hidden">
                <h1 className="text-2xl">Reducer Child Component</h1>
                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 
                justify-between mt-10 w-full">
                    <button className="btn btn-sm text-center" onClick={()=>countContext.counterDispatch('increment')}>Increment</button>
                    <button className="btn btn-sm" onClick={()=>countContext.counterDispatch('decrement')}>Decrement</button>
                </div> 
            </div>
        </div>
    );
};

export default ReducerChild;