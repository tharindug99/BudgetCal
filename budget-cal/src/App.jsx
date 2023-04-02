import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const InitialExpenses = [

];


function App() {
//*************state values *////////
//*************all expenses, add expense *///
const [expenses, setExpenses] = useState(InitialExpenses);
//console.log(expenses);  
//sigle expense
const [charge, setCharge] = useState('')
//sigle expense
const [amount, setAmount] = useState('')
//alert
const[alert, setAlert] = useState({show:false});

//***********Functionality********* */
const handleCharge = e => {
  setCharge(e.target.value);
  console.log(`Charge : ${e.target.value}`);
};
const handleAmount = e => {
  setAmount(e.target.value);
  console.log(`amount : ${e.target.value}`);
};
const handleSubmit = e => {
  e.preventDefault();
  if (charge !== "" && amount > 0) {
    
    console.log(amount , charge);
    
    const singleExpense = {id : uuidv4(), charge, amount};
    setExpenses([... expenses, singleExpense]);
    setCharge("");
    setAmount("");
  }else{
    ///alert
  }
};
return (
    <div className="App">
      <div className="title">
        <h1>Budget Calculator</h1></div>
      
      <Alert/>
      <main className="app">
      <ExpenseForm 
      charge={charge} 
      amount={amount} 
      handleCharge={handleCharge}
      handleAmount={handleAmount} 
      handleSubmit={handleSubmit}/>
      <ExpenseList 
      expenses={expenses}/>
      </main>
      <h1>
        <div className = "answer">
        Total Spending : <span className='total'>
          LKR {expenses.reduce((acc,curr)=>{
            return (acc+= parseInt(curr.amount));
          },0)}
        </span>
        </div>
      </h1>
    </div>
  )
}

export default App
