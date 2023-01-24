import React, { useContext } from 'react';
import { CounterContext } from '../App';
import ContextGrandChild from './ContextGrandChild';

const ContextChild = () => {
    const {setContextState} = useContext(CounterContext);
    return (
        <div>
            <div className="rounded bg-gray-700 text-white w-52  lg:w-1/4 p-10 mx-auto my-10 text-center overflow-hidden">
                <h1 className="text-7xl">0</h1>
                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 
                justify-between mt-10 w-full">
                    <button className="btn btn-sm text-center btn-secondary" onClick={()=>setContextState(prevState => prevState - 1)}>Decrement</button>
                    <button className="btn btn-sm btn-secondary" onClick={()=>setContextState(prevState => prevState + 1)}>Increment</button>
                </div>
            </div>
            <ContextGrandChild/>
        </div>
        
    );
};

export default ContextChild;