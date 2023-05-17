import React, { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/UserContext";
import { StyledHeader } from "./style";

const Header = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <StyledHeader>
      <img src={Logo} alt="" />
      <button onClick={() => userLogout()}>Sair</button>
    </StyledHeader>
  );
};

export default Header;
