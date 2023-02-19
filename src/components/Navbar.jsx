import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-300">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-2xl font-bold">My Todo</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/todo'>Todo</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
