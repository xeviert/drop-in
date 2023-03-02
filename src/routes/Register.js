import React, {useState } from 'react'
import { Link, useHistory } from "react-router-dom";


import '../styling/RegisterLogin.css';

export default function Register() {
    const [error, setError] = useState(null);
    let history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      const { first_name, last_name, address, email, password, confirmPassword } =
        e.target;
      setError({ error: null });
  
      if (password.value !== confirmPassword.value) {
        return setError({ error: 'Passwords do not match' });
      }
      AuthApiService.postUser({
        first_name: first_name.value,
        last_name: last_name.value,
        address: address.value,
        email: email.value,
        password: password.value,
      })
        .then((res) => res.json())
        .then(() => {
          history.push(`/`);
        })
        .catch((error) => {
          setError(error);
        });
    };

    return (
        <div>
        <div className='page-body'>
          <h2>Register</h2>

          <div className='register-login-body'>
            <form onSubmit={handleSubmit}>
              {error && <p className='error'>{error}</p>}

              <label>E-Mail:</label>
              <input type='email' name='email' id='email-input' required />

              <label id='password-label'>Password:</label>
              <input type='password' name='password' required />

              <label id='password-label'>Confirm Password:</label>
              <input type='password' name='confirmPassword' required />

              <button type='submit'>REGISTER</button>
            </form>

            <div id='already-have-account'>
              Already have an account?
              <Link to='/login'>
                <br />
                <em>Login</em>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}
