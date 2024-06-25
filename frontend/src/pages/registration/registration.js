import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { request } from "../../utils";
import { registrationFormSchema } from "../../form-schemas";
import { setUser } from "../../actions";
import styled from "styled-components";

const RegistrationContainer = ({ className }) => {
  const [serverErrorMessage, setServerErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { touchedFields, isValid, errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmation: "",
    },
    resolver: yupResolver(registrationFormSchema),
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    request("api/register", "POST", { login: email, password }).then(
      ({ error, user, redirect, redirectUrl }) => {
        if (error) {
          setServerErrorMessage(error);
        }

        if (redirect) {
          dispatch(setUser(user));
          navigate(redirectUrl);
        }
      }
    );
    reset();
  };

  return (
    <div className={className}>
      <h2 className="form-title">Регистрация</h2>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Логин (эл.почта)..."
          {...register("email")}
        />
        <p className="error-message">{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Пароль..."
          {...register("password", {
            onChange: () =>
              touchedFields.confirmation && trigger("confirmation"),
          })}
        />
        <p className="error-message">{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Подтверждение пароля..."
          {...register("confirmation")}
        />
        <p className="error-message">{errors.confirmation?.message}</p>
        <button type="submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
      </form>
      {serverErrorMessage && (
        <div className="server-error">{serverErrorMessage}</div>
      )}
    </div>
  );
};

export const Registration = styled(RegistrationContainer)`
  width: 350px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 2px 10px #000;

  & .form-title {
    text-align: center;
  }

  & .registration-form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & input {
    padding: 5px;
    width: 70%;
    border: 1px solid #8019c8;
    border-radius: 5px;
  }

  & input:focus {
    border: 3px solid #8019c8;
    border-radius: 5px;
  }

  & button {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #19c880;
    border-radius: 4px;
  }

  & button:disabled {
    background-color: lightgray;
    cursor: none;
  }

  & .error-message {
    font-size: 0.7rem;
    color: red;
    text-align: center;
  }

  & .server-error {
    margin: 0 auto;
    color: red;
  }
`;
