import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <>{user && <Outlet />}</>;
};

export default ProtectedRoutes;
