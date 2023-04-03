import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

// const InitialExpenses = [

// ];

const InitialExpenses = localStorage.getItem("expenses")?
JSON.parse(localStorage.getItem("expenses"))
:[];


function App() {
//*************state values *////////
//*************all expenses, add expense *///
const [expenses, setExpenses] = useState(InitialExpenses);
//console.log(expenses);  
//sigle expense
const [charge, setCharge] = useState('')
//sigle amount
const [amount, setAmount] = useState('')
//alert
const [alert, setAlert] = useState({show: false});
//edit
const[edit, setEdit] = useState(false);
//editItem
const[id, setId] = useState(0);
//***********Functionality********* */
const handleCharge = e => {
  setCharge(e.target.value);
  console.log(`Charge : ${e.target.value}`);
};
const handleAmount = e => {
  setAmount(e.target.value);
  console.log(`amount : ${e.target.value}`);
};

//handle alert
const handleAlert = ({type,text}) => {
  setAlert({show: true,type,text});
  setTimeout(()=>{
    setAlert({show: false})
  },3000)
}
///clear all items
const clearItems = () => {
  console.log("Clear");
  setExpenses([]);
  handleAlert({type:"danger", text:"all items deleted"});
}

///handle delete
const handleDelete = (id) => {
  let tempExpenses = expenses.filter(item => item.id !== id);
  setExpenses(tempExpenses);
  console.log(tempExpenses);
}

///handle edit
const handleEdit = (id) => {
  let expense = expenses.find(item => item.id === id);
  let {charge,amount} = expense;
  setCharge(charge);
  setAmount(amount);
  setEdit(true); 
  setId(id);
}


const handleSubmit = e => {
  e.preventDefault();
  if (charge !== "" && amount > 0) {
      if(edit){
        let tempExpenses = expenses.map(item =>{
          return item.id === id?{...item,charge,amount}:item
        });
        setExpenses(tempExpenses);
        setEdit(false);
        }
      else{
            const singleExpense = {id : uuidv4(), charge, amount};
            setExpenses([... expenses, singleExpense]);
            handleAlert({type:'success', text:'item-added'});
}
    setCharge("");
    setAmount("");
  }
  else{
    handleAlert({
      type:'danger',
      text:'Charge and amount cant be empty'
    });
  }
};
return (
    <div className="App">
      <div className="title">
        <h1>Budget Calculator</h1></div>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <Alert/>
      <main className="app">
      <ExpenseForm 
      charge={charge} 
      amount={amount} 
      handleCharge={handleCharge}
      handleAmount={handleAmount} 
      handleSubmit={handleSubmit}
      edit={edit}/>
      <ExpenseList 
      expenses={expenses}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      clearItems={clearItems}/>
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
