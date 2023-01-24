import React, { useReducer } from 'react';

const initialState = {counter: 0, counter2: 0};
const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
        return {...state, counter:state.counter + action.value};
        case 'decrement':
        return {...state, counter: state.counter - action.value};
        case 'increment2':
        return {...state, counter2: state.counter2 + action.value};
        case 'decrement2':
        return {...state, counter2: state.counter2 - action.value};
        default: 
        return state;
    }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div className="p-10">
                <div className="text-7xl">Count - {count.counter}</div>
                <div className="m-10">
                    <button className="btn btn-sm text-center" onClick={()=>dispatch({type:'increment', value: 1})}>Increment</button>
                    <button className="btn btn-sm text-center ml-4" onClick={()=>dispatch({type:'decrement', value: 1})}>Decrement</button>
                </div>
            </div> 
            <div className="p-10">
                <div className="text-7xl">Count2 - {count.counter2}</div>
                <div className="m-10">
                    <button className="btn btn-sm text-center" onClick={()=>dispatch({type:'increment2', value: 1})}>Increment</button>
                    <button className="btn btn-sm text-center ml-4" onClick={()=>dispatch({type:'decrement2', value: 1})}>Decrement</button>
                </div>
            </div> 
        </div>
    );
};

export default UseReducer;