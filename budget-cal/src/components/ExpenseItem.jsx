import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
const ExpenseItem = ({expense}) => {
  const{id,charge,amount} = expense
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge} </span>
        <button className="edit-btn"><MdEdit/></button>
        <button className="delete-btn"><MdDelete/></button>
        <span className="amount">LKR {amount}</span>

      </div>
    </li>
  )
}

export default ExpenseItem