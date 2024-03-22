import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Navbar from './Navbar';
import './main.css'; 

const AddBankAccount = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const [newBankAccount, setNewBankAccount] = useState({
    bankAccountNumber: '',
    bankName: '',
    ifscCode: '',
    accountType: '',
    currentBalance: 0
  });

  const addBankAccount = () => {
    Axios.post('http://localhost:8080/user/addaccount', {
      ...newBankAccount,
      user: { userId: userId }
    })
      .then(() => {
        alert('Bank account successfully created!');
        navigate('/hOmEpAgE');
      })
      .catch((error) => {
        console.error('Error adding bank account:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBankAccount(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
            <Navbar />
    <div  className="addaccount-body " >
    <div className="container-lg-10 addaccount-container">
      <div className="row">
        <div >
        <div className="header text-center">
      <h2>Add Bank Account</h2>
    </div>
        
          <form  className="form" onSubmit={(e) => { e.preventDefault(); addBankAccount(); }}>
            <div className="field">
              <label className="form-label">Bank Account Number:</label>
              <input type="text" className="form-control" name="bankAccountNumber" value={newBankAccount.bankAccountNumber} onChange={handleInputChange} required />
            </div>
            <div className="field">
              <label className="add-label">Bank Name:</label>
              <input type="text" className="form-control" name="bankName" value={newBankAccount.bankName} onChange={handleInputChange}  required/>
            </div>
            <div className="field">
              <label className="add-label">IFSC Code:</label>
              <input type="text" className="form-control" name="ifscCode" value={newBankAccount.ifscCode} onChange={handleInputChange}  required/>
            </div>
            <div className="field">
              <label className="add-label">Account Type:</label>
              <input type="text" className="form-control" name="accountType" value={newBankAccount.accountType} onChange={handleInputChange}  required/>
            </div>
            <div className="field">
              <label className="add-label">Current Balance:</label>
              <input type="number" className="form-control" name="currentBalance" value={newBankAccount.currentBalance} onChange={handleInputChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Bank Account</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AddBankAccount;
