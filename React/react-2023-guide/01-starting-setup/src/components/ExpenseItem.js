import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023, 2, 28);
  const expenseTile = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate.getDate()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTile}</h2>
        <div className='expense-item__price'>294.67</div>
      </div>
    </div>
  )
}

export default ExpenseItem