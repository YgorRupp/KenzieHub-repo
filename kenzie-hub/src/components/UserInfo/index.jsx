import React from "react";
import { StyledUserInfo } from "./style";

const UserInfo = () => {
  const data = JSON.parse(localStorage.getItem("@UserID"));

  return (
    <StyledUserInfo>
      <h2>{data.name}</h2>
      <p>{data.course_module}</p>
    </StyledUserInfo>
  );
};

export default UserInfo;
