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
        <div style={{ color: "red", margin: "10px" }}>
          {valueKey === "email"
            ? "Email не может быть пустым"
            : valueKey === "password"
            ? "Пароль не может быть пустым"
            : valueKey === "confirmPassword"
            ? "Пароли не совпадают"
            : ""}
        </div>
      )}

      <input
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
