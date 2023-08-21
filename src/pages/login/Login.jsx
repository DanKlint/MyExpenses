import React, { useCallback, useState } from "react";
import { Button } from "../../components/button/Button";
import { InputForm } from "../../components/inputForm/InputForm";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = useCallback((newValue, valueKey) => {
    setFormState((prevState) => ({
      ...prevState,
      [valueKey]: newValue,
    }));
  }, []);

  const clearState = useCallback(() => {
    setFormState({
      email: "",
      password: "",
    });
  }, []);

  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();

      // console.log({ formState });
      // fetch
      clearState();
    },
    [clearState]
  );

  const isButtonDisabled = !(
    formState.email &&
    formState.password &&
    !emailError &&
    !passwordError
  );

  return (
    <main className="form_auth_block">
      <section className="form_auth_block_content">
        <div className="image-wrap">
          <img src="./assets/login.png" alt="math" />
        </div>
        <div className="wrap-input-fields">
          <div className="container">
            <p className="form_auth_block_head_text">Авторизация</p>
            <form onSubmit={handleSubmit}>
              <InputForm
                valueKey="email"
                inputPlaceholder="Введите e-mail"
                value={formState.email}
                onChange={handleChange}
                error={emailError}
                setError={setEmailError}
              />

              <InputForm
                type="password"
                valueKey="password"
                inputPlaceholder="Введите пароль"
                value={formState.password}
                onChange={handleChange}
                error={passwordError}
                setError={setPasswordError}
              />
              <Button buttonText="Войти" disabled={isButtonDisabled} />
            </form>
            <div className="create-acc">
              <NavLink to="/register" className="create-acc-link">
                Создать аккаунт &#x21e8;
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
