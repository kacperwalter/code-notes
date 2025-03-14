import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData, onHideForm }) => {
  // multiple states using object instead of slicing it up https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596010#content
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = event => setEnteredTitle(event.target.value)
  const amountChangeHandler = event => setEnteredAmount(event.target.value)
  const dateChangeHandler = event => setEnteredDate(event.target.value)

  const submitHandler = event => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    onHideForm()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-13' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onHideForm}>Cancel</button>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm