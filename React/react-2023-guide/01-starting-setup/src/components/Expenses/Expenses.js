import { useState } from 'react'
import './Expenses.css'

import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2019')

  const filterChangeHandler = selectedYear => setFilteredYear(selectedYear)

  const filteredExpenses = items.filter(item => (item.date.getFullYear()).toString() === filteredYear)

  return (
    <div>
      <Card className='expenses'> 
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map(item => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses