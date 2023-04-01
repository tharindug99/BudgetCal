import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const InitialExpenses = [
  {id: uuidv4(), charge: "rent", amount: 45000},
  {id: uuidv4(), charge: "Car Lease", amount: 22000},
  {id: uuidv4(), charge: "Food Expenses", amount: 10000},
];


function App() {
const [expenses, setExpenses] = useState(InitialExpenses);
//console.log(expenses);  
return (
    <div className="App">
      <h1>Budget Calculator</h1>
      <Alert/>
      <main className="app">
      <ExpenseForm/>
      <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        total spending : <span className='total'>
          LKR {expenses.reduce((acc,curr)=>{
            return acc+= curr.amount;
          },0)}
        </span>
      </h1>
    </div>
  )
}

export default App
