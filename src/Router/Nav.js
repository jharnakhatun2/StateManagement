import React from 'react';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost normal-case text-xl">State Management</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li tabIndex={0}>
        <a>
        State
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a href="/form">Simple Form</a></li>
          <li><a href="/count">Count App</a></li>
          <li><a href="/datafatchbyusestate">Data Fetch</a></li>
          
        </ul>
      </li>
      <li><a  href="/context" >Context API</a></li>
      <li tabIndex={1}>
        <a>
        Reducer
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a href="/reducercounter">Counter App</a></li>         
          <li><a href="/complexreducer">Complex Reducer</a></li>         
          <li><a href="/reducercounter2">One State Double Counter</a></li>         
          <li><a href="/datafatchbyusereducer">Data Fetch</a></li>         
        </ul>
      </li>
    </ul>
  </div>
</div>
    );
};

export default Nav;