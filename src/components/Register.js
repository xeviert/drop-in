import React from 'react';
import { Link } from 'react-router-dom';

import './styling/RegisterLogin.css';

export default function Register() {
  return (
    <div className='page-body'>
      <div>
        <h1>Register</h1>
      </div>

      <section>
        <form className='form-group' id='register-login-form'>
          {/* {this.state.error && <p className='error'>{this.state.error}</p>} */}
          <label for='first-name' id='label-id'>
            Full name:
          </label>
          <input
            type='text'
            id='full-name'
            name='full_name'
            className='form-control'
            required
          ></input>
          <br />
          <label for='email' id='label-id' type='email' required>
            Email Address:
          </label>
          <input
            type='text'
            id='email'
            name='email'
            className='form-control'
            required
          ></input>
          <br />
          <label for='password' id='label-id'>
            Password:
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-control'
            required
          ></input>
          <br />
          <label for='confirm-pw' id='label-id'>
            Confirm Password:
          </label>
          <input
            type='password'
            id='confirm-pw'
            name='confirmPassword'
            className='form-control'
            required
          ></input>
          <br />
          <button type='submit'>Register</button>
        </form>
      </section>

      <div>
        <p>Already have an account?</p>
        <Link to='/login'>
          <p>
            <em>Login</em>
          </p>
        </Link>
      </div>
    </div>
  );
}
