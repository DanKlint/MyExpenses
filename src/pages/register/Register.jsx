import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { InputForm } from "../../components/inputForm/InputForm";
import { NavLink } from "react-router-dom";
import { registerUser } from "../../redux/reducers/registrationSlice";

import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

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
      confirmPassword: "",
    });
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
  }, []);

  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();

      dispatch(registerUser(formState));

      clearState();

      setRegistrationSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    [clearState, formState, dispatch, navigate]
  );

  const isButtonDisabled = !(
    formState.email &&
    formState.password &&
    formState.confirmPassword &&
    !emailError &&
    !passwordError &&
    !confirmPasswordError
  );

  return (
    <main className="form_register_block">
      <section className="form_register_block_content">
        <div className="image-wrap">
          <img src="./assets/login.png" alt="math" />
        </div>
        <div className="wrap-input-fields">
          <div className="container">
            <p className="form_register_block_head_text">Регистрация</p>
            <form className="form_register_style" onSubmit={handleSubmit}>
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
              <InputForm
                type="password"
                valueKey="confirmPassword"
                inputPlaceholder="Подтвердите пароль"
                value={formState.confirmPassword}
                onChange={handleChange}
                error={confirmPasswordError}
                setError={setConfirmPasswordError}
                formState={formState}
              />
              {registrationSuccess && (
                <div
                  style={{
                    color: "rgb(20, 165, 15)",
                    marginLeft: "55px",
                  }}
                >
                  Регистрация прошла успешно!
                </div>
              )}
              <Button
                buttonText="Зарегистрироваться"
                disabled={isButtonDisabled}
              />
            </form>
            <div className="login">
              <NavLink to="/" className="login-link">
                Войти &#x21e8;
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
