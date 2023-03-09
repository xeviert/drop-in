import React, {useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { Input, Required, Label } from './Form';
import Button from './Button';
import AuthApiService from '../services/auth-api-service';

export default function Register() {
  const [error, setError] = useState(null);
  let history = useHistory();

  const registerForm = {
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
    backgroundColor: '#F3F3F3',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { full_name, email, password, confirmPassword } = e.target;
    setError({ error: null });

    if (password.value !== confirmPassword.value) {
      return setError({ error: 'Passwords do not match' });
    }

    AuthApiService.postUser({
      full_name: full_name.value,
      email: email.value,
      password: password.value,
    })
      // .then(() => {
      //   name.value = '';
      //   email.value = '';
      //   password.value = '';
      // })        
        .then((res) => res.json())
        // .then(() => {
        //   history.push(`/`);
        // })
        .catch((error) => {
          setError(error);
        });
  };

  return (
    <div className="page-body">
      <div>
        <h1>Register</h1>
      </div>

      <section style={registerForm}>
        <form style={form} onSubmit={handleSubmit}>
          {error && <p className='error'>{error}</p>}
          <Label htmlFor="first-name" id="label-id">
            Full Name:
            <Required />
          </Label>
          <Input
            type="text"
            id="full-name"
            name="full_name"
            className="form-control"
            required
          />
          <br />
          <Label htmlFor="email" id="label-id" type="email" required>
            Email:
            <Required />
          </Label>
          <Input
            type="text"
            id="email"
            name="email"
            className="form-control"
            required
          />
          <br />
          <Label htmlFor="password" id="label-id">
            Password:
            <Required />
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            className="form-control"
            required
          />
          <br />
          <Label htmlFor="confirm-pw" id="label-id">
            Confirm Password:
            <Required />
          </Label>
          <Input
            type="password"
            id="confirm-pw"
            name="confirmPassword"
            className="form-control"
            required
          />
          <br />
          <Button type="submit" style={registerBtn}>
            Register
          </Button>
        </form>

        <div style={alreadyRegistered}>
          Already have an account?
          <Link to="/login">
            <div>
              <em>Login</em>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
