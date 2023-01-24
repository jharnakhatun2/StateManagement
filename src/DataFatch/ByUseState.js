import React, { useState } from 'react';
import { useEffect } from 'react';

const ByUseState = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            setPost(data);
            setError('');
        })
        .catch(()=>{
            setLoading(false);
            setPost({});
            setError("There was a Problem fatching !");
        });
    },[]);
    return (
        <div className="m-5 text-2xl">
        {loading ? 'Loading .....' : post.body}
        {error || null}
        </div>
    );
};

export default ByUseState;