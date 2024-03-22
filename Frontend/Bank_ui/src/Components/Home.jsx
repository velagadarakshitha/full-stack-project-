
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './main.css';
import Navbar from './Navbar';
import AddMoney from './AddMoney';
import SendMoney from './SendMoney';
import Statement from './Statement';


const Home = () => {
  const [userDetails, setUserDetails] = useState({
    userId: '',
    username: '',
    password: '',
    phoneNumber: '',
    email: '',
    address: '',
    bankAccounts: [],
  });

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [showStatements, setShowStatements] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('http://localhost:8080/user/getLoggedInUserWithAccounts/' + localStorage.getItem('username'))
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  const handleAccountSelection = (accountId) => {
    setSelectedAccount(accountId);
  };

  const handleSendMoney = () => {
    setShowSendMoney(true);
  };


  const handleStatementClick = () => {
    setShowStatements(true);
  };

  return (
    <div className="home-body">
      <Navbar />
      <div className="container home-container">
        <h1 className="text-center">Welcome, {userDetails.username}!</h1>
        <div className="row">
          <div className="col-md-8">
            <table className="custom-table user-table">
              <tbody className="double-border">
                <tr>
                  <th>User Name:</th>
                  <td>{userDetails.username}</td>
                </tr>
                <tr>
                  <th>Phone Number:</th>
                  <td>{userDetails.phoneNumber}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{userDetails.email}</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>{userDetails.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-12 mt-4">
            <h1 className="text-center">Your Bank Accounts</h1>
            <table className="custom-table  ">
              <thead className="">
                <tr>
                  <th>Select</th>
                  <th>Bank Account Number</th>
                  <th>Bank</th>
                  <th>Balance</th>
                  <th>IFSC Code</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.bankAccounts.map((account) => (
                  <tr key={account.accountId}>
                    <td>
                      <input
                        type="radio"
                        name="selectedAccount"
                        value={account.accountId}
                        checked={selectedAccount === account.accountId}
                        onChange={() => handleAccountSelection(account.accountId)}
                      />
                    </td>
                    <td>{account.bankAccountNumber}</td>
                    <td>{account.bankName}</td>
                    <td>{account.currentBalance}</td>
                    <td>{account.ifscCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {selectedAccount && (
              <div>
                <button className="btn btn-primary" onClick={() => navigate(`/add-money/${selectedAccount}`)} style={{ margin: '10px' }}>
                  Add Money
                </button> 
                
                <button className="btn btn-primary" onClick={() => navigate(`/send-money/${selectedAccount}`)}  style={{ margin: '10px' }}> Send Money </button>

                <button className="btn btn-primary" onClick={handleStatementClick}> View Statements </button>
                {showStatements && (
                   <div>
                    <button className="btn btn-danger mb-3" onClick={() => setShowStatements(false)}>Close Statements</button>
                         <Statement selectedAccount={selectedAccount} onClose={() => setShowStatements(false)} />
                      </div>
                    )}
              </div>
            )}
            <Link to="/add-bank-account" className="btn btn-primary ml-2">Add Bank Account</Link>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
