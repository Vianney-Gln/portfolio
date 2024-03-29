import React, { useState } from "react";
// Style
import "../styles/admin.scss";
// Routing
import { useNavigate } from "react-router-dom";

//Components
import FormPhoto from "./FormPhoto";
import FormTextIntro from "./FormTextIntro";
import FormCreateProjects from "./FormCreateProjects";
import ManageProjects from "./ManageProjects";
import Modal from "../modals/Modal";

const Admin = () => {
  // Navigate
  const navigate = useNavigate();

  // Function deconnecting user from admin
  const deconnexion = () => {
    localStorage.removeItem("token_access_portfolio");
    navigate("/");
  };

  // Styles modal
  const modalStyleDelete = {
    width: "35vw",
    height: "35vh",
    backgroundColor: "black",
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "70",
    transform: "translate(-50%, -50%)",
    border: "2px solid white",
    borderRadius: "10px",
  };

  const modalStyleUpdate = {
    width: "80vw",
    height: "80vh",
    backgroundColor: "black",
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "70",
    transform: "translate(-50%, -50%)",
    border: "2px solid white",
    borderRadius: "10px",
  };

  // States
  const [modalOpen, setModalOpen] = useState(false); // state managing the open or close modal
  const [idProject, setIdProject] = useState(null); // state getting the id of the selected project
  const [toUpdate, setToUpdate] = useState(false); // state determines if delete or update operation with modal

  return (
    <div className="admin">
      {modalOpen && (
        <Modal
          idProject={idProject}
          modalStyleDelete={modalStyleDelete}
          modalStyleUpdate={modalStyleUpdate}
          setModalOpen={setModalOpen}
          toUpdate={toUpdate}
        />
      )}
      <h1>
        Administration du portfolio{" "}
        <button onClick={deconnexion} class="deconnexion" type="button">
          Se déconnecter
        </button>
      </h1>
      <div className="container-form">
        <FormPhoto />
        <FormTextIntro />
        <FormCreateProjects />
        <ManageProjects
          setIdProject={setIdProject}
          idProject={idProject}
          setModalOpen={setModalOpen}
          setToUpdate={setToUpdate}
        />
      </div>
    </div>
  );
};

export default Admin;
