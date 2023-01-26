import React, { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Parent from './Component/Counter/Parent';
import ContextParent from './Context/ContextParent';
import ByUseReducer from './DataFatch/ByUseReducer';
import ByUseState from './DataFatch/ByUseState';
import ComplexReducer from './Reducer/ComplexReducer';
import ReducerCounter from './Reducer/ReducerCounter';
import UseReducer from './Reducer/UseReducer';
import Main from './Router/Main';
import ReducerForm from './StateForm/ReducerForm';
import StateForm from './StateForm/StateForm';



export const counter_Context = createContext();
const App = () => {
 const [count, setCount] = useState(0);

    const value = { count, setCount};

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Parent></Parent>
        },
        {
          path: '/count',
          element: <Parent></Parent>
        },
        {
          path: '/context',
          element: <ContextParent></ContextParent>
        },
        {
          path: '/form',
          element: <StateForm></StateForm>
        },
        {
          path: '/reducercounter',
          element: <ReducerCounter></ReducerCounter>
        },
        {
          path: '/reducercounter2',
          element: <UseReducer></UseReducer>
        },
        {
          path: '/complexreducer',
          element: <ComplexReducer></ComplexReducer>
        },
        {
          path: '/datafatchbyusestate',
          element: <ByUseState></ByUseState>
        },
        {
          path: '/datafatchbyusereducer',
          element: <ByUseReducer></ByUseReducer>
        },
        {
          path: '/reducerForm',
          element: <ReducerForm></ReducerForm>
        }
      ]
    }
  ])
  return (
    <counter_Context.Provider value={value}>
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} ></RouterProvider>  
    </div>
    </counter_Context.Provider>
  );
};

export default App;