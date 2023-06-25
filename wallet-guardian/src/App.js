import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
    const expense = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.17,
            date: new Date(2022, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.67,
            date: new Date(2022, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2022, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2022, 5, 12),
        },
    ];

    const addExpensesHandler = (expenses) => {
        console.log("In App.js");
        console.log(expenses);
    };

    return (
        <div>
            <NewExpense onAddExpenses={addExpensesHandler} />
            <Expenses expense={expense} />
        </div>
    );
}

export default App;
