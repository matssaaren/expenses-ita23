import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [{
    date: new Date(2024, 10, 12),
    title: 'New Book',
    price: 30.99
  },
{
  date: new Date(2024, 10, 12),
  title: 'New jEANS',
  price: 999.99
}]

  return (
    <div className="App">
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
    </div>
  );
}

export default App;
