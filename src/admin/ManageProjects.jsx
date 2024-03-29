/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
// Context
import ContextInfos from "../context/ContextInfos";

const ManageProjects = ({ setToUpdate, setModalOpen, setIdProject }) => {
  // Context
  const contextInfos = useContext(ContextInfos);

  return (
    <>
      <h2 className="title-manage-project">Gestion des projets</h2>
      <div className="manage-projects">
        <div className="container-projects">
          {contextInfos.projects.length ? (
            <ul className="list-projects">
              {contextInfos.projects.length
                ? contextInfos.projects.map((project) => {
                    return (
                      <li key={project.id}>
                        <h3>{project.name}</h3>
                        <img src={project.urlimage} alt={project.name} />
                        <div className="buttons">
                          <button
                            type="button"
                            onClick={() => {
                              setToUpdate(false);
                              setModalOpen(true);
                              setIdProject(project.id);
                            }}
                          >
                            Supprimer
                          </button>
                          <button
                            onClick={() => {
                              setModalOpen(true);
                              setIdProject(project.id);
                              setToUpdate(true);
                            }}
                            type="button"
                          >
                            Modifier
                          </button>
                        </div>
                      </li>
                    );
                  })
                : ""}
            </ul>
          ) : (
            <p className="no-projects">
              Vous n'avez pas encore réalisé de projets...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageProjects;
