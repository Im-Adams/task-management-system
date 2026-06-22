import api from "./api";

export const getTaskById = (id) => {
  return api.get(`/tasks/${id}`);
};

export const updateTask = (id, task) => {
  return api.put(`/tasks/${id}`, task);
};