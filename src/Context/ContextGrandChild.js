import React, { useContext } from "react";
import { counter_Context } from "../App";

const ContextGrandChild = () => {
    const {count} = useContext(counter_Context);
  return (
    <div>
      <div className="bg-gray-900 text-yellow-400 w-52  lg:w-1/4 p-10 mx-auto my-10 rounded text-center">
        <h1 className=" text-7xl">{count}</h1>
        <h1 className="text-xl">Grand Child</h1>
      </div>
    </div>
  );
};

export default ContextGrandChild;
