import axios from "axios";

const baseUrl = "http://localhost:3001";

/**
 * Function uploading and changing the photo
 * @param {object} data
 * @returns {promise}
 */
const uploadPhoto = (data) => {
  return axios.post(`${baseUrl}/api/portFolio_Vianney/upload`, data);
};

/**
 * Function getting introduction and actually
 * @returns {promise}
 */
export const getIntro = () => {
  return axios
    .get(`${baseUrl}/api/portFolio_Vianney/introduction`)
    .then((result) => result.data);
};

export default uploadPhoto;
