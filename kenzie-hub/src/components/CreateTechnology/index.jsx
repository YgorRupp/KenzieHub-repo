import React, { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledCreateTechnology } from "./style";

const CreateTechnology = () => {

  const {setShowModal} = useContext(TechContext)

  return (
    <StyledCreateTechnology>
      <h3>Tecnologias</h3>
      <button onClick={() => setShowModal(true)}>+</button>
    </StyledCreateTechnology>
  );
};

export default CreateTechnology;
