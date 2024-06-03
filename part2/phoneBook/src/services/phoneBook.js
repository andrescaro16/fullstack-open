import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const getPerson = (id) => {
  return axios.get(`${baseUrl}/${id}`).then((response) => response.data);
};

const postPerson = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const putPerson = (updatePerson) => {
  return axios
    .put(`${baseUrl}/${updatePerson.id}`, updatePerson)
    .then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data)
}

export default { getAll, getPerson, postPerson, putPerson, deletePerson };
