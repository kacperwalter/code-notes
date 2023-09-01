import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate'

function ExpenseItem({ title, amount, date }) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem