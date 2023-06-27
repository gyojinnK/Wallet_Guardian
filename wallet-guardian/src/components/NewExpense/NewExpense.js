import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [viewForm, setViewForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpenses(expenseData);
    };

    const viewFormHandler = () => {
        viewForm ? setViewForm(false) : setViewForm(true);
    };

    let innerContent = (
        <button onClick={viewFormHandler}>Add New Expense</button>
    );
    if (viewForm) {
        innerContent = (
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onViewFormHandler={viewFormHandler}
                onSetViewForm={setViewForm}
            />
        );
    }

    return <div className="new-expense">{innerContent}</div>;
};

export default NewExpense;
