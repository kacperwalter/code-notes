import './Expenses.css';

import ExpenseItem from "./ExpenseItem";

function Expenses({ data }) {
  return (
    <div className='expenses'>
      {data.map(item => (
        <ExpenseItem 
          title={item.title} 
          amount={item.amount} 
          date={item.date} 
        />
      ))}
    </div>
  )
}

export default Expenses