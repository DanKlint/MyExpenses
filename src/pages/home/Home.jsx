import React, { useState, useCallback } from "react";
import { Button } from "../../components/button/Button";
import { Budget } from "../../components/budget/Budget";
import { Remaining } from "../../components/remaining/Remaining";
import { ExpenseTotal } from "../../components/expenseTotal/ExpenseTotal";
import { InputForm } from "../../components/inputForm/InputForm";
import { UserProfile } from "../../components/userProfile/UserProfile";
import { ListItem } from "../../components/listItem/ListItem";
import "./Home.css";

const Home = () => {
  const [formState, setFormState] = useState({
    description: "",
    amount: "",
    date: "",
  });

  const [budgetValue, setBudgetValue] = useState(0);
  const [remainingValue, setRemainingValue] = useState(0);
  const [expenseTotalValue, setExpenseTotalValue] = useState(0);

  const [descriptionError, setDescriptionError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [historyList, setHistoryList] = useState([]);

  const [isFilterBudgetActive, setIsFilterBudgetActive] = useState(false); //вынести фильтры
  const [isFilterExpenseActive, setIsFilterExpenseActive] = useState(false);

  const toggleBudgetFilter = () => {
    setIsFilterBudgetActive(!isFilterBudgetActive);
  };

  const toggleExpenseFilter = () => {
    setIsFilterExpenseActive(!isFilterExpenseActive);
  };

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

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
      date: "",
    });
  }, []);

  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();

      const newItem = {
        description: formState.description,
        date: formState.date,
        amount: formState.amount,
      };

      const amount = parseFloat(formState.amount);
      const isExpense = amount < 0;

      if (isExpense) {
        setExpenseTotalValue((prevTotal) => prevTotal - amount);
        setRemainingValue((prevRemaining) => prevRemaining + amount);
      } else {
        setBudgetValue((prevBudget) => prevBudget + amount);
        setRemainingValue((prevRemaining) => prevRemaining + amount);
      }

      setHistoryList((prevList) => [newItem, ...prevList]);

      clearState();
    },
    [clearState, formState]
  );

  const isButtonDisabled = !(
    formState.description &&
    formState.amount &&
    formState.date &&
    !descriptionError &&
    !amountError &&
    !dateError
  );

  return (
    <div className="container-main">
      <div className="title-box">
        <h1 className="title">Мои расходы</h1>
        <svg
          className="open-profile"
          xmlns="http://www.w3.org/2000/svg"
          height="25px"
          viewBox="0 0 448 512"
          onClick={openProfile}
        >
          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
        </svg>
      </div>

      {isProfileOpen && <UserProfile closeProfile={closeProfile} />}

      <h3 className="new-entry">Новая запись</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="description">Описание</label>
          <InputForm
            type="text"
            valueKey="description"
            inputPlaceholder="Например «Еда»"
            value={formState.description}
            onChange={handleChange}
            error={descriptionError}
            setError={setDescriptionError}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Сумма(+/-)</label>
          <InputForm
            type="number"
            valueKey="amount"
            inputPlaceholder="Введите сумму"
            value={formState.amount}
            onChange={handleChange}
            error={amountError}
            setError={setAmountError}
          />
        </div>
        <div className="form-control">
          <label htmlFor="start">Дата:</label>
          <InputForm
            type="date"
            valueKey="date"
            value={formState.date}
            onChange={handleChange}
            error={dateError}
            setError={setDateError}
          />
        </div>
        <Button buttonText="Добавить" disabled={isButtonDisabled} />
      </form>

      <br />

      <div className="budget-remain-expense">
        <div className="bg-dark">
          <h4>Пополнение</h4>
          <Budget budget={budgetValue} onClick={toggleBudgetFilter} />
        </div>
        <div className="bg-dark">
          <h4>Остаток</h4>
          <Remaining remaining={remainingValue} />
        </div>
        <div className="bg-dark">
          <h4>Траты</h4>
          <ExpenseTotal
            expenseTotal={expenseTotalValue}
            onClick={toggleExpenseFilter}
          />
        </div>
      </div>
      <h3 className="history">История</h3>
      <div className="filter">
        <div className="filter-description">Описание</div>
        <div className="filter-date">Дата</div>
        <div className="filter-amount">Сумма</div>
      </div>
      <ul className="list">
        {historyList.map((item, index) => (
          <ListItem
            key={index}
            description={item.description}
            date={item.date}
            amount={item.amount}
            isFilterBudgetActive={isFilterBudgetActive}
            isFilterExpenseActive={isFilterExpenseActive}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
