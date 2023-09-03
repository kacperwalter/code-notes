import { useState } from 'react'
import './Expenses.css'

import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState('2019')

  const filterChangeHandler = selectedYear => setFilteredYear(selectedYear)

  return (
    <div className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Card>
        {data.map(item => (
          <ExpenseItem
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