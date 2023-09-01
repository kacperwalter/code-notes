import './ExpenseDate.css'

function ExpenseDate({ date }) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-US', { month: '2-digit' });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  )
}

export default ExpenseDate