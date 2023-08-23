import React, { memo, useCallback, useEffect, useState } from "react";
import "./InputForm.css";

const InputFormImpl = ({
  value: propsValue,
  valueKey,
  onChange,
  type,
  inputPlaceholder,
  error,
  setError,
  formState,
}) => {
  const [value, setValue] = useState(propsValue);

  const onBlur = useCallback(
    (ev) => {
      let newValue = value;
      onChange(newValue, valueKey);

      if (newValue.trim() === "") {
        setError(true);
      } else if (valueKey === "confirmPassword") {
        if (newValue !== formState.password) {
          setError(true);
        } else {
          setError(false);
        }
      } else if (valueKey === "password") {
        if (newValue.length < 8) {
          setError(true);
        } else {
          setError(false);
        }
      } else {
        setError(false);
      }
    },
    [value, valueKey, onChange, setError, formState]
  );

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  return (
    <div>
      {error && (
        <div
          style={{
            color: "red",
            marginLeft:
              valueKey === "description" ||
              valueKey === "amount" ||
              valueKey === "date"
                ? "0"
                : "35px",
            marginBottom: "5px",
          }}
        >
          {valueKey === "email"
            ? "Email не может быть пустым"
            : valueKey === "password"
            ? "Пароль не может быть меньше 8 символов"
            : valueKey === "confirmPassword"
            ? "Пароли не совпадают"
            : valueKey === "amount"
            ? "Сумма не может отсутствовать"
            : valueKey === "description"
            ? "Описание не может отсутствовать"
            : valueKey === "date"
            ? "Дата не может отсутствовать"
            : ""}
        </div>
      )}

      <input
        style={{
          marginBottom:
            valueKey === "description" ||
            valueKey === "amount" ||
            valueKey === "date"
              ? "0px"
              : "20px",
        }}
        onBlur={onBlur}
        type={type || "text"}
        name={valueKey}
        id={valueKey}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
};

export const InputForm = memo(InputFormImpl);
