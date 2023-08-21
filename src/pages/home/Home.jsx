import React from "react";
// import { NavLink } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Budget } from "../../components/budget/Budget";
import { Remaining } from "../../components/remaining/Remaining";
import { ExpenseTotal } from "../../components/expenseTotal/ExpenseTotal";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-main">
      <div className="title">
        <h1 className="title">Мои расходы</h1>
      </div>

      <h3>Новая запись</h3>
      <form id="form">
        <div className="form-control">
          <label for="text">Описание</label>
          <input
            type="text"
            id="text"
            onfocus="this.value=''"
            placeholder="Например 'Еда'"
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Сумма(+/-) <br />
          </label>
          <input
            type="number"
            id="amount"
            onfocus="this.value=''"
            placeholder="Введите сумму..."
          />
        </div>
        <Button buttonText="Добавить" />
      </form>
      <br />

      <div className="budget-remain-expense">
        <div className="bg-dark">
          <h4>Баланс</h4>
          <Budget />
        </div>
        <div className="bg-dark">
          <h4>Остаток</h4>
          <Remaining />
        </div>
        <div className="bg-dark">
          <h4>Траты</h4>
          <ExpenseTotal />
        </div>
      </div>
      <h3>История</h3>

      <ul id="list" className="list"></ul>
    </div>
  );
};

export default Home;
