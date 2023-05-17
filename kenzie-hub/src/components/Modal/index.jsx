
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { StyledDivModal } from "./style";

export const Modal = () => {
  const { register, handleSubmit } = useForm({});

  const { createTech, showModal, setShowModal } = useContext(TechContext);

  const submit = (data) => {
    createTech(data);
  };
  return (
    showModal && (
      <StyledDivModal>
        <div className="modalBox">
          <form onSubmit={handleSubmit(submit)}>
            <header>
              <p>Cadastrar Tecnologia</p>
              <button onClick={() => setShowModal(false)}>X</button>
            </header>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Escolha o nome da tecnologia"
              {...register("title")}
            />
            <label htmlFor="">Selecionar status</label>
            <select name="" id="" {...register("status")}>
              <option value="">Selecione o seu status</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediario</option>
              <option value="avançado">Avançado</option>
            </select>
            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </div>
      </StyledDivModal>
    )
  );
};

export default Modal;
