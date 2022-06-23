import axios from "axios";

const baseUrl = "http://localhost:3001";

const uploadPhoto = (data) => {
  return axios
    .post(`${baseUrl}/api/portFolio_Vianney/upload`, data)
    .then((result) => result)
    .catch((err) => console.log(err));
};

export default uploadPhoto;