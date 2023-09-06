import { useState } from 'react'

import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => {
  const [isFormActive, setIsFormActive] = useState(false)

  const showForm = () => setIsFormActive(true)
  const hideForm = () => setIsFormActive(false)

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      {isFormActive ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideForm}/>
      ) : (
        <button type='submit' onClick={showForm}>Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense