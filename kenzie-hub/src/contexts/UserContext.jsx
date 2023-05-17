import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/api";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);

  const [user, setUser] = useState(null);

  const [userTechs, setUserTechs] = useState({});


  const navigate = useNavigate();

  async function autoLogin() {
    const token = localStorage.getItem("@KenzieHubToken");
    if (token) {
      try {
        setGlobalLoading(true);
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setUserTechs(response.data.techs);
        navigate("/dashboard");
      } catch (error) {
      } finally {
        setGlobalLoading(false);
      }
    }
  }
  useEffect(() => {
    autoLogin();
  }, []);

  const userLogin = async (formData, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@KenzieHubToken", response.data.token);
      localStorage.setItem("@UserID", JSON.stringify(response.data.user));
      navigate("/dashboard");
      setUser(response.data.user);
      setUserTechs(response.data.user.techs);
    } catch (error) {
      toast.error("Email ou senha invalidos");
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      navigate("/");
      toast.success("usuario cadastrado com sucesso!");
    } catch (error) {
      toast.error("Não foi possivel cadastrar o usuario");
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@UserID");
    localStorage.removeItem("@KenzieHubToken");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
        userLogout,
        globalLoading,
        userTechs,
        setUserTechs,
        autoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
