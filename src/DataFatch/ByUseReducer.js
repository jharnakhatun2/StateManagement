import React, { useReducer } from 'react';
import { useEffect } from 'react';

const initialState = {
    loading : true,
    post : {},
    error : " "
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'Success':
            return {
                loading : false,
                post : action.result,
                error : " ",
            }
        case 'Error':
            return {loading : false,
            post : {},
            error : "There was a loading Problem !"
            }
        default:
            return state;
    }
}
const ByUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => {
            dispatch({type : 'Success', result: data})
        })
        .catch(()=>{
            dispatch({type : 'Error'})
        });
    },[]);
    return (
        <div className="m-5 text-2xl">
        {state.loading ? 'Loading .....' : state.post.body}
        {state.error || null}
        </div>
    );
};

export default ByUseReducer;