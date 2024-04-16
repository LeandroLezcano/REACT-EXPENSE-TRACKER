/* eslint-disable react/jsx-key */
import { useGlobalState } from "../../context/GlobalState"
import { TransactionItem } from './TransactionItem.jsx'

function TransactionsList() {

    const { transactions } = useGlobalState()
    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold w-full">History</h3>
            <ul>
                {transactions.map((transaction) => (
                    <TransactionItem transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </>
    )
}

export default TransactionsList