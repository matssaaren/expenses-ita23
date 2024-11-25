import './ExpenseItem.css'

const ExpenseItem = (props) => {

   const day = props.data.date.toLocaleString('en-US', {day: '2-digit'})
   const month = props.data.date.toLocaleString('en-US', {month: 'long'})
   const year = props.data.date.toLocaleString()

    return (
    <div className='expense-item'>
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
        <div className='expense-item__description'>
            <h2>Title</h2>
            <div className='expense-item__price'>Price</div>
        </div>
    </div>
    )
}

export default ExpenseItem