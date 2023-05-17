import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { userTechs, setUserTechs } = useContext(UserContext);

  const [techId, setTechId] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [showModalDelete, setShowModalDelete] = useState(false);

  const createTech = async (formData) => {
    try {
      const token = localStorage.getItem("@KenzieHubToken");
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTechs([...userTechs, response.data]);
      setShowModal(false);
      toast.success("Tecnologia criada com sucesso!");
    } catch (error) {
    } finally {
    }
  };

  const deleteTech = async (id) => {
    try {
      const token = localStorage.getItem("@KenzieHubToken");
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = userTechs.filter((tech) => tech.id !== id);

      setUserTechs(newTechList);
      setShowModalDelete(false);
    } catch (error) {}
  };

  const editTech = async (id, formData) => {
    try {
      const token = localStorage.getItem("@KenzieHubToken");
      const response = await api.put(`/users/techs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newEditList = userTechs.filter((tech) => tech.id !== id);
      setUserTechs([...newEditList, response.data]);
      setShowModalDelete(false);
    } catch (error) {}
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        showModal,
        setShowModal,
        showModalDelete,
        setShowModalDelete,
        deleteTech,
        editTech,
        setTechId,
        techId,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
