import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledDivModalDelete } from "./style";

const ModalDelete = () => {
  const { showModalDelete, setShowModalDelete, deleteTech, editTech, techId } =
    useContext(TechContext);

  const { userTechs } = useContext(UserContext);

  const { register, handleSubmit } = useForm({});

  const submit = (data) => {
    editTech(techId, data);
  };

  return (
    showModalDelete && (
      <StyledDivModalDelete>
        <div className="modalBox">
          <form onSubmit={handleSubmit(submit)}>
            <header>
              <p>Tecnologia Detalhes</p>
              <button onClick={() => setShowModalDelete(false)}>X</button>
            </header>
            <label htmlFor="">Selecionar status</label>
            <select name="" id="" {...register("status")}>
              <option value="">Selecione o seu status</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediario</option>
              <option value="avançado">Avançado</option>
            </select>
            <div className="containerModalDelete">
              <button type="submit">Salvar alterações</button>
              <button onClick={() => deleteTech(techId)}>Excluir</button>
            </div>
          </form>
        </div>
      </StyledDivModalDelete>
    )
  );
};

export default ModalDelete;
