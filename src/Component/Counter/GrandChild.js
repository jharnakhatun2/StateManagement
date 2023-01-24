import React from 'react';

const GrandChild = ({count}) => {
    return (
        <div>
            <div className=" text-center bg-red-300 w-52  lg:w-1/4 p-10 mx-auto my-10 rounded">
                <h1 className="text-7xl">{count}</h1>
            </div>
        </div>
    );
};

export default GrandChild;