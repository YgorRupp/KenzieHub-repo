import React, { useContext, useState } from "react";
import { StyledDivRegister, StyledLink } from "../RegisterForm/style";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./registerSchema";
import { UserContext } from "../../contexts/UserContext";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const submit = (data) => {
    userRegister(data, setLoading);
    reset();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });
  return (
    <StyledDivRegister>
      <div>
        <img src={Logo} alt="" />
          <StyledLink to="/">Voltar</StyledLink>
      </div>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <div>
          <p>Crie sua conta</p>
          <span>Rapido e grátis, vamos nessa</span>
        </div>
        <label htmlFor="Nome">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
          disabled={loading}
        />
        {errors.name?.message && (
          <p aria-label="error">{errors.name.message}</p>
        )}

        <label htmlFor="Email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
          disabled={loading}
        />
        {errors.email?.message && (
          <p aria-label="error">{errors.email.message}</p>
        )}

        <label htmlFor="Senha">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          disabled={loading}
        />
        {errors.password?.message && (
          <p aria-label="error">{errors.password.message}</p>
        )}

        <label htmlFor="Confirmar senha">Confirmar Senha</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
          disabled={loading}
        />
        {errors.confirmPassword?.message && (
          <p aria-label="error">{errors.confirmPassword.message}</p>
        )}

        <label htmlFor="Bio">Bio</label>
        <input
          id="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
          disabled={loading}
        />
        {errors.bio?.message && <p aria-label="error">{errors.bio.message}</p>}

        <label htmlFor="Contato">Contato</label>
        <input
          id="contato"
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
          disabled={loading}
        />
        {errors.contact?.message && (
          <p aria-label="error">{errors.contact.message}</p>
        )}

        <label htmlFor="Selecionar módulo"></label>
        <select name="" id="" {...register("course_module")} disabled={loading}>
          <option value="">Selecionar modulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        {errors.course_module?.message && (
          <p aria-label="error">{errors.course_module.message}</p>
        )}
        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </StyledDivRegister>
  );
};

export default RegisterForm;
