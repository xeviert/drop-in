import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const Login = {
    width: '70%',
    margin: '0 auto',
  };

  const form = {
    padding: '2em',
    borderRadius: '5px',
    backgroundColor: '#F3F3F3',
  };

  const loginBtn = {
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

  const needToRegister = {
    margin: '0 auto',
    marginTop: '3em',
    textAlign: 'center',
    backgroundColor: '#F3F3F3',
    width: '28%',
    display: 'block',
    padding: '.7em 0',
    borderRadius: '5px',
  };

  return (
    <div className='page-body'>
      <div>
        <h1>Login</h1>
      </div>

      <section style={Login}>
        <form style={form}>
          {/* {this.state.error && <p className='error'>{this.state.error}</p>} */}
          <label for='email' id='label-id' type='email' required>
            Email Address:
          </label>
          <input
            type='text'
            id='email'
            name='email'
            class='form-control'
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
            class='form-control'
            required
          ></input>
          <br />
          <button type='submit' style={loginBtn}>
            Login
          </button>
        </form>

        <div style={needToRegister}>
          Aren't registered yet?
          <Link to='/register'>
            <div>
              <em>Login</em>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
