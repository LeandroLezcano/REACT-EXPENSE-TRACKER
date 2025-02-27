import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";


function ExpenseGraphic() {

    const { transactions } = useGlobalState();

    const total = transactions.reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalIncome = transactions.filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpense = transactions.filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)* -1;

    const totalExpensesPercentage = Math.round(totalExpense / totalIncome *100);

    const totalIncomePercentage = 100 - totalExpensesPercentage;

    console.log(totalExpensesPercentage);
    console.log(totalIncomePercentage);

    console.log(total);
    console.log(totalIncome)
    console.log(totalExpense);

  return (
    
    <VictoryPie
    colorScale={["#e74c3c", "#2ecc71"]}
    data={[
        { x: "Expenses", y: totalExpensesPercentage},
        { x: "Income", y: totalIncomePercentage},

    ]}
    labels={({datum}) => `${datum.y}%` }
    labelComponent={<VictoryLabel
    angle={45}
    style={{
        fill: "white",
    }}

    />}
    />
  )
}

export default ExpenseGraphic