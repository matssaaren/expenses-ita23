const ExpenseItem = (props) => {

   const day = props.data.date.toLocalString('en-US', {day: '2-digit'})
   const month = props.data.date.toLocalString('en-US', {month: 'long'})
   const year = props.data.date.getFullYear()

    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
        </div>
    )
}

export default ExpenseDate