import axios from "axios";

// json-server will run on port 3001 (see package.json script)
const BASE_URL = "http://localhost:3001/employees";

export const getEmployees = () => {
  return axios.get(BASE_URL);
};

export const getEmployeeById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const createEmployee = (employee) => {
  return axios.post(BASE_URL, employee);
};

export const updateEmployee = (id, employee) => {
  return axios.put(`${BASE_URL}/${id}`, employee);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
