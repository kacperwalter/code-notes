import './Expenses.css';

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = ({ data }) => {
  return (
    <Card className='expenses'>
      {data.map(item => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  )
}

export default Expenses