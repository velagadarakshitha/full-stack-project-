import { useState } from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css'
import Register from './Components/log-sup/Register';
import Login from './Components/log-sup/Login';
import Home from './Components/Home';
import AddBankAccount from './Components/AddBankAccount';
import AddMoney from './Components/AddMoney'
import SendMoney from './Components/SendMoney';
import Statement from './Components/Statement';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hOmEpAgE" element={<Home />} />
          <Route path="/add-bank-account" element={<AddBankAccount />} />
          <Route path="/add-money/:accountId" element={<AddMoney />} />
          <Route path="/send-money/:selectedAccount" element={<SendMoney />} />    
          <Route path="/Statement/:selectedAccount" element={<Statement />} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


