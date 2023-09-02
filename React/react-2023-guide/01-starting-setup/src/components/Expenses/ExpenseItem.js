import { useState } from 'react'

import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = ({ title, amount, date }) => {
  const [header, setHeader] = useState(title);

  const clickHandler = () => setHeader("Updated!");

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{header}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem