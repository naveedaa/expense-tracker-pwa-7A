import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
  const [text, settext] = useState<string>('');
  const [amount, setamount] = useState<number>(0);
  const {Addtransaction}: any= useContext(GlobalContext);
  const addIncome = (e: any) => {
    e.preventDefault();
    if (amount <= 0) {
      alert('Please enter the amount which is greater than zero')
    } else {
        const newTransaction={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
  }
  Addtransaction(newTransaction);
  }
}
  
  
  const addExpense = (e: any) => {
  e.preventDefault();
  if (amount <= 0) {
    alert('Please enter the amount which is greater than zero')
  } else {
      const newTransaction={
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -amount
      }
Addtransaction(newTransaction);
}
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input id="text" type="text" value={text} onChange={(e: any)=> settext(e.target.value)} placeholder="Enter text..." />
      </div>

      <div className="form-control">
        <label htmlFor="amount">Amount
        <br />
        (negative - expense, positive - income)</label>
        <input id="amount" type="number" value={amount} onChange={(e: any)=> {
          setamount(Math.abs(parseFloat(e.target.value)))}} placeholder="Enter amount..." />
      </div>
      
      <button onClick={addIncome} className="btn add-btn">Add Income</button>
      <button onClick={addExpense} className="btn exp-btn">Add Expense</button>
    </>
  )
}