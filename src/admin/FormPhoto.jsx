import React, { useState } from "react";
// Services
import uploadPhoto from "../service/service";

const FormPhoto = () => {
  const [messagePhoto, setMessagePhoto] = useState(""); // state manage messages
  const [file, setFile] = useState(null); // state to send file

  /**
   * Function running the service uploadPhoto function
   * @param {event} e
   */
  const sendPhoto = (e, photo) => {
    const data = new FormData();
    data.append("file", photo);
    uploadPhoto(data)
      .then(() => {
        setMessagePhoto("la photo est modifiée");
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(() => {
        setMessagePhoto("photo non envoyée");
      });
  };
  return (
    <form className="form-photo">
      {/* Part upload photo */}
      <div className="container-avatar">
        <img
          src="http://localhost:3001/api/portFolio_Vianney/upload"
          alt="avatar"
        />
      </div>
      <h2>Changer la photo de l'introduction</h2>
      <div className="change-button">
        <label htmlFor="image">
          <input
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
        </label>
        <button type="button" onClick={(e) => sendPhoto(e, file)}>
          changer la photo
        </button>
      </div>
      <p className="message">{messagePhoto ? messagePhoto : ""}</p>
    </form>
  );
};

export default FormPhoto;