import React from 'react';
import { Link } from 'react-router-dom';

// import './styling/RegisterLogin.css';

export default function Register() {
  const Register = {
    width: '70%',
    margin: '0 auto',
  };

  const registerBtn = {
    background: '#0084ff',
    border: 'unset',
    cursor: 'pointer',
    font: 'unset',
    padding: '0.6rem',
    borderRadius: '5px',
    color: 'white',
    margin: '0 auto',
    display: 'block',
    width: '30%',
  };

  const form = {
    padding: '2em',
    borderRadius: '5px',
    backgroundColor: '#F3F3F3'
  };

  const alreadyRegistered = {
    margin: '0 auto',
    marginTop: '3em',
    textAlign: 'center',
    backgroundColor: '#F3F3F3',
    width: '28%',
    padding: '.7em 0',
    borderRadius: '5px',
  };

  return (
    <div className='page-body'>
      <div>
        <h1>Register</h1>
      </div>

      <section style={Register}>
        <form style={form}>
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
          <button type='submit' style={registerBtn}>
            Register
          </button>
        </form>

        <div style={alreadyRegistered}>
          Already have an account?
          <Link to='/login'>
            <div>
              <em>Login</em>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
