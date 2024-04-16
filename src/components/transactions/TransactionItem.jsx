/* eslint-disable react/prop-types */
import { useGlobalState } from "../../context/GlobalState";


export function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalState()
    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
            <div>
                <span>${transaction.amount}</span>
                <button onClick={() => {
                    deleteTransaction(transaction.id);

                }} className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded inline-flex items-center relative overflow-hidden">
                    <span className="hover:inline">x</span>
                    <span className="hidden">Delete</span>
                </button>
            </div>
        </li>
    )
}

export default TransactionItem

{/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
  <span>Botón</span>
  <span class="ml-2 hidden group-hover:block">Eliminar</span>
</button> */}