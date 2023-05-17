import React, { useContext} from "react";
import { StyledCard } from "./style";
import Trash from "../../../assets/Vector.svg";
import { UserContext } from "../../../contexts/UserContext";
import { TechContext } from "../../../contexts/TechContext";

const TechnologyCard = () => {
  const { user, userTechs } = useContext(UserContext);

  const { setShowModalDelete, setTechId } = useContext(TechContext);

  return (
    <div className="containerCards">
      {userTechs &&
        userTechs.map((tech, index) => (
          <StyledCard key={index}>
            <h2>{tech.title}</h2>
            <div>
              <span>{tech.status}</span>
              <img
                onClick={() => {
                  setShowModalDelete(true);
                  setTechId(tech.id);
                }}
                src={Trash}
                alt=""
              />
            </div>
          </StyledCard>
        ))}
    </div>
  );
};

export default TechnologyCard;
