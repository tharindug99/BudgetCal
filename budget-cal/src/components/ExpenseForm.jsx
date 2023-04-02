import React from 'react'
import {MdSend} from 'react-icons/md';

const ExpenseForm = ({
  charge,
  amount,
  handleAmount,
  handleCharge,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge" className="label">Charge</label>
          <input 
          type="text" 
          className="form-control" 
          id="charge"
          name="charge"
          placeholder="E.g. Rent"
          value={charge} 
          onChange={handleCharge}/>
          
        </div>


        <div className="form-group">
          <label htmlFor="amount" className="label">Amount</label>
          <input 
          type="number" 
          className="form-control" 
          id="amount"
          name="amount"
          placeholder="E.g. 25000"
          value={amount}
          onChange={handleAmount } />
          
          
        </div>
        <button type="submit" className="submit-btn">
        Submit<MdSend className="submit-btn-1"/>
      </button>
      </div>

      
    </form>
  )
}

export default ExpenseForm