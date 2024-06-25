import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { request } from "../../utils";
import { authFormSchema } from "../../form-schemas";
import { setUser } from "../../actions";
import styled from "styled-components";

const AuthorizationContainer = ({ className }) => {
  const [serverErrorMessage, setServerErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    request("api/login", "POST", { login: email, password }).then(
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
      <h2 className="form-title">Авторизация</h2>
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
          {...register("password")}
        />
        <p className="error-message">{errors.password?.message}</p>
        <button type="submit" disabled={!isValid}>
          Войти
        </button>
        <Link className="link" to="/register">
          Зарегистрироваться
        </Link>
      </form>
      {serverErrorMessage && (
        <div className="server-error">{serverErrorMessage}</div>
      )}
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
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

  & .link {
    margin-top: 10px;
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
