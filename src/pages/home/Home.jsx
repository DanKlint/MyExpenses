import React from "react";
// import { NavLink } from "react-router-dom";
import { Budget } from "../../components/Budget";
import { Remaining } from "../../components/Remaining";
import { ExpenseTotal } from "../../components/ExpenseTotal";
import "./Home.css";

const Home = () => {
  return (
    <div className="background">
      <div className="container-main">
        <div className="head">
          <h1 className="tittle">Мои расходы</h1>
          <div className="category-table">
            <div className="budget">
              <Budget />
            </div>
            <div className="remaining">
              <Remaining />
            </div>
            <div className="expense-total">
              <ExpenseTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
