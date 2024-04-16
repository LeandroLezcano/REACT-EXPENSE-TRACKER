import { GlobalProvider } from './context/GlobalState.jsx';
import Balance from './components/Balance.jsx';
//import Header from './components/Header.jsx';
import Transactions from './components/transactions/Transactions.jsx';
import TransactionsList from './components/transactions/TransactionsList.jsx';
import IncomeExpenses from './components/transactions/IncomeExpenses.jsx';
import ExpenseGraphic from './components/ExpenseGraphic.jsx';


function App() {
  return (

    <GlobalProvider>
      <div className='bg-zinc-900 text-white h-screen flex justify-center items-center'>
        <div className='container mx-auto w-3/6'>
        <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
          <div>
            <h1 className='text-4xl font-bold'> Expense Tracker </
            h1>
            <IncomeExpenses />
            <Balance />
            <Transactions />
          </div>
          <div className='flex flex-col flex-1'>
          <ExpenseGraphic />
          <TransactionsList />
          
          </div>
        </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;