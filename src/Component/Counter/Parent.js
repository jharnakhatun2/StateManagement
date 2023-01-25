import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="bg-yellow-300 w-52  lg:w-1/4 p-10 mx-auto my-10 rounded text-center">
                <h1 className=" text-7xl">{count}</h1>
                <h1 className="text-sm">Parent</h1>
            </div>
            <Child count={count} setCount={setCount}/>
        </div>
    );
};

export default Parent;