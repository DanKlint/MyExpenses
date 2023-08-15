import React from "react";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <main className="form_auth_block">
      <section className="form_auth_block_content">
        <div className="image-wrap">
          <img src="./assets/login.png" alt="math" />
        </div>
        <div className="wrap-input-fields">
          <div className="container">
            <p className="form_auth_block_head_text">Авторизация</p>
            <form className="form_auth_style">
              <InputForm
                inputType="email"
                inputName="auth_email"
                inputPlaceholder="Введите почту"
              />
              <InputForm
                inputType="password"
                inputName="auth_pass"
                inputPlaceholder="Введите пароль"
              />
              <Button buttonText="Войти" rout="/" />
            </form>
            <NavLink to="/register" className="create-acc-login">
              Создать аккаунт &#x21e8;
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
