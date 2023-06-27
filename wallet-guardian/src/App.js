import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSE = [
    // id값을 이용하여 React는 요소를 구별, 랜더링하는 것에 이용한다.
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.17,
        date: new Date(2021, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.67,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2020, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2019, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpensesHandler = (expenses) => {
        setExpenses((prev) => {
            return [expenses, ...prev];
            // 스프레드 연산을 사용하여 새로 추가된 데이터와 이전 데이터를 합쳐 새로운 배열로 expenses 설정
            // 기존 요소에 새로운 요소 추가하는 방법: 스프레드 연산(...)
        });
    };

    return (
        <div>
            <NewExpense onAddExpenses={addExpensesHandler} />
            <Expenses expense={expenses} />
        </div>
    );
}

export default App;
