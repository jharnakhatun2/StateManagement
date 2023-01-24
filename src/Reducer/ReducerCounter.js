import React, { createContext, useReducer } from 'react';
import ReducerChild from './ReducerChild';

export const counterContext = createContext();
const initialState = 0;
const reducer = (state, action)=>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}
const ReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
           <div className="bg-red-300 w-52  lg:w-1/4 p-10 mx-auto my-10 rounded text-center">
                <h1 className=" text-7xl">{count}</h1>
                <p>Reducer Counter(ContextAPI + useContext Hook + useReducer Hook)</p>
            </div> 
            <counterContext.Provider value={{counterDispatch : dispatch}}>
            <ReducerChild/>
            </counterContext.Provider>
        </div>
    );
};

export default ReducerCounter;