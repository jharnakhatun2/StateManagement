import { useContext } from 'react';
import ContextChild from './ContextChild';
import {counter_Context} from '../App';

const ContextParent = () => {
    const {count} = useContext(counter_Context);
    return (
        <div>
            <div className="bg-gray-500 text-yellow-400 w-52  lg:w-1/4 p-10 mx-auto my-10 rounded text-center">
                <h1 className=" text-7xl">{count}</h1>
                <h1 className="text-xl">Parent</h1>
            </div>
            <ContextChild/>
        </div>
    );
};

export default ContextParent;