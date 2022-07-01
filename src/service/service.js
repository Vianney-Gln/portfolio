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
 * Function creting a project
 * @param {object} data
 * @param {string} token
 * @returns {promise}
 */
export const createProject = (dataForm, token) => {
  return axios({
    method: "post",
    data: dataForm,
    url: `${baseUrl}/api/portFolio_Vianney/projects`,
    headers: { authorization: token },
  });
};

/**
 * Function deleting one project by id
 * @param {number} id
 * @param {string} token
 * @returns {promise}
 */
export const deleteProjectById = (id, token) => {
  return axios({
    method: "delete",
    url: `${baseUrl}/api/portFolio_Vianney/projects/${id}`,
    headers: { authorization: token },
  });
};

/**
 * Function getting one project by id
 * @param {number} id
 * @returns {promise}
 */
export const getProjectById = (id) => {
  return axios
    .get(`${baseUrl}/api/portFolio_Vianney/projects/${id}`)
    .then((result) => result.data);
};

/**
 * Function updating one project by his id
 * @param {object} data
 * @param {number} id
 * @param {string} token
 * @returns {promise}
 */
export const updateProjectById = (data, id, token) => {
  return axios({
    method: "put",
    url: `${baseUrl}/api/portFolio_Vianney/projects/${id}`,
    data: data,
    headers: { authorization: token },
  }).then((result) => result.data);
};

/**
 * Function deleting the image from one project
 * @param {number} id
 * @param {string} token
 * @returns {promise}
 */
export const deleteImageProjectById = (id, token) => {
  return axios
    .delete(`${baseUrl}/api/portFolio_Vianney/project/deleteImage/${id}`, {
      headers: { authorization: token },
    })
    .then((result) => result.data);
};

export default uploadPhoto;
