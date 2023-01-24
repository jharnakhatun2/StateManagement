import React, { useReducer } from 'react';

const initialState ={counter: 0};
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return{counter: state.counter + action.value};
        case 'decrement':
            return{counter: state.counter - action.value};
        default:
            return state;
    }
}
const ComplexReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="p-10">
                <div className="text-7xl">Count - {count.counter}</div>
                <div className="m-5">
                    <button className="btn btn-sm btn-primary text-center" onClick={()=>dispatch({type:'increment', value: 1})}>Increment</button>
                    <button className="btn btn-sm text-center ml-4" onClick={()=>dispatch({type:'decrement', value: 1})}>Decrement</button>
                </div>
                <div className="m-5">
                    <button className="btn btn-sm btn-success text-center" onClick={()=>dispatch({type:'increment', value: 5})}>Increment</button>
                    <button className="btn btn-sm btn-secondary text-center ml-4" onClick={()=>dispatch({type:'decrement', value: 5})}>Decrement</button>
                </div>
        </div> 
    );
};

export default ComplexReducer;