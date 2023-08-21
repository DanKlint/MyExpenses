import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import { Budget } from "../../components/budget/Budget";
import { Remaining } from "../../components/remaining/Remaining";
import { ExpenseTotal } from "../../components/expenseTotal/ExpenseTotal";
import { InputForm } from "../../components/inputForm/InputForm";
import { ListItem } from "../../components/listItem/ListItem";
import "./Home.css";

const Home = () => {
  //новое
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const [records, setRecords] = useState([]);

  const updateBudget = (amount, description) => {
    const recordType = amount > 0 ? "Доход" : "Расход";
    const newRecord = { description, amount, type: recordType };

    setRecords([...records, newRecord]);

    if (amount > 0) {
      setIncome(income + amount);
      setRemaining(remaining + amount);
    } else {
      setExpenses(expenses - amount);
      setRemaining(remaining - amount);
    }
  };

  //новое
  return (
    <div className="container-main">
      <div className="title">
        <h1 className="title">Мои расходы</h1>
      </div>

      <h3>Новая запись</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="description">Описание</label>
          <InputForm
            type="description"
            valueKey="text"
            inputPlaceholder="Например 'Еда'"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Сумма(+/-) <br />
          </label>
          <InputForm
            type="number"
            valueKey="amount"
            inputPlaceholder="Введите сумму..."
            updateBudget={updateBudget}
          />
        </div>
        <Button buttonText="Добавить" />
      </form>
      <br />

      <div className="budget-remain-expense">
        <div className="bg-dark">
          <h4>Пополнение</h4>
          <Budget income={income} />
        </div>
        <div className="bg-dark">
          <h4>Остаток</h4>
          <Remaining remaining={remaining} />
        </div>
        <div className="bg-dark">
          <h4>Траты</h4>
          <ExpenseTotal expenses={expenses} />
        </div>
      </div>

      <ListItem records={records} />
    </div>
  );
};

export default Home;
