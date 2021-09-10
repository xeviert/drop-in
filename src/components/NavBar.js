import React from 'react';
import { Link } from 'react-router-dom';
// import AppContext from '../AppContext'
import '../styling/NavBar.css';

export default function NavBar() {
  return (
    <nav id='nav-bar'>
      <div id='container-inside-nav'>
        <h1>DropIn</h1>
        <div id='nav-links'>
          {/* <Link className='link' to='/'>
            Home
          </Link>
          <Link className='link' to='/about'>
            About
          </Link> 
          <Link className='link' to='/users'>
            Users
          </Link> */}
          <Link className='navbar-link' to='/teachers'>
            Teachers
          </Link>
          <Link className='navbar-link' to='/studios'>
            Studios
          </Link>
          <Link className='navbar-link' to='/login'>
            Login
          </Link>
          <Link className='navbar-link' to='/register'>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
