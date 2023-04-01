import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const InitialExpenses = [
  {id: uuidv4(), charge: "Rent", amount: 45000},
  {id: uuidv4(), charge: "Car Lease", amount: 22000},
  {id: uuidv4(), charge: "Food Expenses", amount: 10000},
];


function App() {
const [expenses, setExpenses] = useState(InitialExpenses);
//console.log(expenses);  
return (
    <div className="App">
      <div className="title">
        <h1>Budget Calculator</h1></div>
      
      <Alert/>
      <main className="app">
      <ExpenseForm/>
      <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        <div className = "answer">
        Total Spending : <span className='total'>
          LKR {expenses.reduce((acc,curr)=>{
            return acc+= curr.amount;
          },0)}
        </span>
        </div>
      </h1>
    </div>
  )
}

export default App
