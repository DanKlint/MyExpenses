import React from "react";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { NavLink } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <main className="form_register_block">
      <section className="form_register_block_content">
        <div className="image-wrap">
          <img src="./assets/login.png" alt="math" />
        </div>
        <div className="wrap-input-fields">
          <div className="container">
            <p className="form_register_block_head_text">Регистрация</p>
            <form className="form_register_style">
              <InputForm
                inputType="email"
                inputName="register_email"
                inputPlaceholder="Введите почту"
              />
              <InputForm
                inputType="password"
                inputName="register_pass"
                inputPlaceholder="Введите пароль"
              />
              <InputForm
                inputType="password"
                inputName="confirm_pass"
                inputPlaceholder="Подтвердите пароль"
              />
              <Button buttonText="Зарегистрироваться" rout="/login" />
            </form>
            <NavLink to="/login" className="login">
              Войти &#x21e8;
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
