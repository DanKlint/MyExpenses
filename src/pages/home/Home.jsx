import React, { useState, useCallback } from "react";
import { Button } from "../../components/button/Button";
import { Budget } from "../../components/budget/Budget";
import { Remaining } from "../../components/remaining/Remaining";
import { ExpenseTotal } from "../../components/expenseTotal/ExpenseTotal";
import { InputForm } from "../../components/inputForm/InputForm";
import { List } from "../../components/list/List";
import "./Home.css";

const Home = () => {
  const [formState, setFormState] = useState({
    description: "",
    amount: "",
  });

  const [descriptionError, setDescriptionError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const handleChange = useCallback((newValue, valueKey) => {
    setFormState((prevState) => ({
      ...prevState,
      [valueKey]: newValue,
    }));
  }, []);

  const clearState = useCallback(() => {
    setFormState({
      description: "",
      amount: "",
    });
  }, []);

  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();

      clearState();
    },
    [clearState]
  );

  const isButtonDisabled = !(
    formState.description &&
    formState.amount &&
    !descriptionError &&
    !amountError
  );

  return (
    <div className="container-main">
      <div className="title">
        <h1 className="title">Мои расходы</h1>
      </div>

      <h3>Новая запись</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="description">Описание</label>
          <InputForm
            type="text"
            valueKey="description"
            inputPlaceholder="Например 'Еда'"
            value={formState.description}
            onChange={handleChange}
            error={descriptionError}
            setError={setDescriptionError}
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
            value={formState.amount}
            onChange={handleChange}
            error={amountError}
            setError={setAmountError}
          />
        </div>
        <Button buttonText="Добавить" disabled={isButtonDisabled} />
      </form>
      <br />

      <div className="budget-remain-expense">
        <div className="bg-dark">
          <h4>Пополнение</h4>
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
      {/* <List /> */}
    </div>
  );
};

export default Home;
