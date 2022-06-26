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

/**
 * Function updating introduction
 * @param {object} data
 * @returns {promise}
 */
export const updateIntro = (data) => {
  return axios.put(`${baseUrl}/api/portFolio_Vianney/introduction`, data);
};

/**
 * Function getting projects
 * @returns {promise}
 */
export const getProjects = () => {
  return axios
    .get(`${baseUrl}/api/portFolio_Vianney/projects`)
    .then((result) => result.data);
};

/**
 *
 * @param {object} data
 * @returns {promise}
 */
export const createProject = (data) => {
  return axios.post(`${baseUrl}/api/portFolio_Vianney/projects`, data);
};

export default uploadPhoto;
