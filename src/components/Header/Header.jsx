import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/icons/logo.png'; // Ensure this path is correct

const Header = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/book'>Booking</Link></li>
              </ul>
            </div>
            <img className='logo' src={logo} alt="Logo" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/book'>Booking</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Sign Out</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
