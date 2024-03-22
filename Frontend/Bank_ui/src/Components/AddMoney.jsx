import React, { useState } from 'react';
import Axios from 'axios';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const AddMoney = () => {
  const { accountId } = useParams();
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`http://localhost:8080/user/addMoney/${accountId}/${amount}`, {
      bankAccountId: parseInt(accountId)
    })
      .then((response) => {
        alert('Money added successfully:', response.data);
        navigate('/hOmEpAgE');
      })
      .then(() => {
        // Create statement for adding money
        Axios.post('http://localhost:8080/user/createStatement', {
          amount: parseFloat(amount),
          fromAccountId: parseInt(accountId),
          toAccountId: null, // No recipient account for adding money
          bankAccountId: parseInt(accountId) // Include bank account ID
        });
      })
      .catch((error) => {
        console.error('Error adding money:', error);
      });
  };

  return (
    <div>
          <Navbar />
    <div className="addaccount-body">
      <div className="container-lg-10 addaccount-container">
        <div className="row">
          <div>
            <div className="header text-center"><h2>Add Money to Account</h2></div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label> Amount:</label>
                <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} required/>
              </div>
              <button type="submit" className="btn btn-primary">Add Money</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddMoney;
