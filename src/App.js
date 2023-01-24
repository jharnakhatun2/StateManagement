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
import StateForm from './StateForm/StateForm';


export const CounterContext = createContext();

const App = () => {
  const [contextState, setContextState] = useState(1);
  
  const value = {
    contextState,
    setContextState
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
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
        }
      ]
    }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
    <CounterContext.Provider value={value}>
      <RouterProvider router={router} ></RouterProvider> 
      </CounterContext.Provider>    
    </div>
  );
};

export default App;