import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './log-sup.css';

export default function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.get('http://localhost:8080/user/get/' + user.username)
      .then((res) => {
        if (res.data.password === user.password) {
          // Store both username and userId in local storage upon successful login
          localStorage.setItem('username', user.username);
          localStorage.setItem('userId', res.data.userId); // Assuming userId is available in the response
          navigate('/hOmEpAgE');
        } else {
          alert('Please enter the correct username and password');
          console.log(res);
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  }

  return (
    <div className='body'>
     <div className='form-container'>
         <div className='header text-center'>
            <h2>LogIn to Your Account</h2>
          </div>
      
      <form  className='form' onSubmit={handleSubmit}>
      <div className='field'> 
        <label htmlFor="" id='username' className="form-label">Enter Username : </label>
        <input
          type="text"
          placeholder="Username"
          className="form-control"
          autoComplete='off'
          name="username"
          value={user.username}
          onChange={handleChange}
        />
         </div>
         <div className='field'> 
        <label htmlFor="" id='password' className="form-label">Enter Password : </label>
        <input
          type="password"
          className="form-control "
          autoComplete='off'
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
         </div>
        <input
          type="submit"
          value="Login"
          className='button'
        />
        <h4>New user ?</h4>
        <button onClick={handleRegister} className='button'>Register</button>
      </form>
    </div>
    </div>
  );
}
