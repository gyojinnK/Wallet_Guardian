import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (seletedYear) => {
        setFilteredYear(seletedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            {props.expense.map((expenses) => {
                if (expenses.date.getFullYear().toString() === filteredYear) {
                    return (
                        <ExpenseItem
                            key={expenses.id}
                            title={expenses.title}
                            amount={expenses.amount}
                            date={expenses.date}
                        />
                    );
                }
            })}
        </Card>
    );
};

export default Expenses;
