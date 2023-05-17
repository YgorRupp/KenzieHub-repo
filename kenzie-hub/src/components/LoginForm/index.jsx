import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { StyledDivLogin, StyledLinkLogin } from "./style";
import Logo from "../../assets/Logo.svg";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submit = (data) => {
    userLogin(data, setLoading);
  };

  return (
    <>
      <StyledDivLogin>
        <img src={Logo} alt="" />
        <form onSubmit={handleSubmit(submit)}>
          <h2>Login</h2>
          <label htmlFor="Email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Seu email"
            {...register("email")}
            disabled={loading}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="Senha">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Sua senha"
            {...register("password")}
            disabled={loading}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit" disabled={loading}>
            Entrar
          </button>
          <span>Ainda não possui uma conta?</span>
            <StyledLinkLogin to="/register">Cadastre-se</StyledLinkLogin>
        </form>
      </StyledDivLogin>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default LoginForm;
