import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './log-sup.css';

export default function Register() {
  const navigate = useNavigate();

  const [regi, setRegi] = useState({
    username: '',
    password: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (event) => {
    setRegi({ ...regi, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/add', regi);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('Username already exists. Please choose a different username.');
      } else {
        console.error('Error during registration:', error.response?.data || error.message);
      }
    }
  };

  const isFormValid = () => {
    return regi.username !== '' && regi.password !== '' && regi.address !== '' && regi.phoneNumber !== '' && regi.email !== '';
  };

  return (
<div className="body">
    <div className='form-container'>
    <div className="header text-center">
      <h2>Register Here</h2>
    </div>
      <form   className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="username" className="form-label">Enter Username:</label>
        <input
          type="text"
          className="form-control"
          name="username"
          autoComplete='off'
          placeholder="Username"
          value={regi.username}
          onChange={handleChange}
          required
        />
        </div>
        <div className="field">
        <label htmlFor="password" className="form-label">Enter Password:</label>
        <input
          type="password"
          className="form-control p-2 m-2"
          placeholder="Password"
          autoComplete='off'
          name="password"
          value={regi.password}
          onChange={handleChange}
          required
        />
        </div>
        <div className="field">
        <label htmlFor="address" className="form-label">Enter Address:</label>
        <input
          type="text"
          className="form-control p-2 m-2"
          placeholder="Address"
          autoComplete='off'
          name="address"
          value={regi.address}
          onChange={handleChange}
          required
        />
        </div>
        <div className="field">
        <label htmlFor="phoneNumber" className="form-label">Enter Phone Number:</label>
        <input
          type="text"
          className="form-control p-2 m-2"
          placeholder="Phone Number"
          autoComplete='off'
          name="phoneNumber"
          value={regi.phoneNumber}
          onChange={handleChange}
          required
        />
        </div>
        <div className="field">
        <label htmlFor="email" className="form-label">Enter Email:</label>
        <input
          type="email"
          className="form-control p-2 m-2"
          placeholder="Email"
          autoComplete='off'
          name="email"
          value={regi.email}
          onChange={handleChange}
          required
        />
        </div>
        <div className="field">
            <input
              type="checkbox"
              id="tc"
              className="terms"
              required
            />
            <label htmlFor="tc">I Agree To Terms And Conditions</label>
          </div>
        <input type="submit" value="Register" className="button" disabled={!isFormValid()} />
      </form>
    </div>
  </div>
  );
}
