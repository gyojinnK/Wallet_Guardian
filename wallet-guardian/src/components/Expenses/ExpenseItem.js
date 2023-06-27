import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* 함수 이름만 기입하는 이유는 해당 코드가 실행될 때 JSX코드가 평가될 때 실행되기 때문! */}
            </Card>
        </li>
    );
};

export default ExpenseItem;
