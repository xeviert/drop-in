import React from 'react';
import { Link } from 'react-router-dom';
// import AppContext from '../AppContext'
import './styling/NavBar.css';

export default function NavBar() {
  return (
    <nav id='nav-bar'>
      <div id='container-inside-nav'>
        <h1>Drop In</h1>
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
          <Link className='link' to='/teachers'>
            Teachers
          </Link>
          <Link className='link' to='/studios'>
            Studios
          </Link>
          <Link className='link' to='/login'>
            Login
          </Link>
          <Link className='link' to='/register'>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
