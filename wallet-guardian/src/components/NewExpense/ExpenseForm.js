import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     하나의 객체를 관리할 때 다른 enteredTitle만 갱신한다면
        //     나머지 enteredAmount와 enteredDate가 없는 객체로 갱신되기 때문에
        //     반드시 나머지 key값들을 수동으로 복사해야한다.
        //     ...userInput, // <-- ...를 이용하여 userInput을 먼저! 복사하고
        //     enteredTitle: e.target.value, // <-- enteredTitle을 오버라이트한다.
        // });
        // setUserInput((prev) => {
        //     return { ...prev, enteredTitle: e.target.value };
        // });
    };

    const amountChageHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });
    };

    const submitHandler = (e) => {
        e.preventDefault(); // form의 submit 버튼을 수행할 때 페이지가 재로딩 되는 것을 방지.
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        // 자식 컴포넌트에서 부모 컴포넌트로 데이터를 넘겨주기 위한 함수
        // 이 함수는 현 컴포넌트에 정의되지 않았지만 부모 컴포넌트에서 정의되어
        // props로 넘겨 받았기 때문에 사용가능 (함수 포인터)
        // => 자식과 부모가 소통하는 방법, 데이터 or 상태 끌어올리기

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChageHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
