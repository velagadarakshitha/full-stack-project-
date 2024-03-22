// Statement.jsx
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Statement = ({ selectedAccount }) => {
  const [statements, setStatements] = useState([]);

  useEffect(() => {
    const fetchStatements = async () => {
      try {
        const url = `http://localhost:8080/user/statements/${selectedAccount}`;
        console.log('Fetching statements from:', url);
        const response = await Axios.get(url);
        setStatements(response.data);
      } catch (error) {
        console.error('Error fetching statements:', error);
      }
    };
  
    fetchStatements();
  }, [selectedAccount]);
  

  return (
    <div style={{ margin: '5%' }}>
       <div className="header text-center"><h2>Statements</h2></div>
      <table className="custom-table  ">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>From Account</th>
            <th>To Account</th>
            <th>Bank Account</th>
          </tr>
        </thead>
        <tbody>
          {statements.map((statement) => (
            <tr key={statement.id}>
              <td>{statement.amount}</td>
              <td>{statement.transactionDate}</td>
              <td>{statement.fromAccountId}</td>
              <td>{statement.toAccountId}</td>
              <td>{statement.bankAccountId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statement;
