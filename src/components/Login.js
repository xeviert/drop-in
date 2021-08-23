import React from 'react';
import './styling/RegisterLogin.css';

export default function Login() {
  return (
    <div className='page-body'>
      <div>
        <h1>Login</h1>
      </div>

      <section>
        <form class='form-group' id='register-login-form'>
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
          <button type='submit'>Register</button>
        </form>
      </section>
    </div>
  );
}
