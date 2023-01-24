import React, { useReducer } from 'react';
import ReducerChild from './ReducerChild';

const ReducerCounter = () => {
    const initialState = 0; //initialState = state = 0
    const reducer = () =>{
        return 
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
           <div className="bg-red-300 w-52  lg:w-1/4 p-10 mx-auto my-10 rounded text-center">
                <h1 className=" text-7xl">{state}</h1>
            </div> 
            <ReducerChild/>
        </div>
    );
};

export default ReducerCounter;