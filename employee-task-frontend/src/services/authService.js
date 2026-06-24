import api from "../services/api";

export const registerUser = (userData) => {
  return api.post("/api/auth/register", userData);
};

export const loginUser = (userData) => {
  return api.post("/api/auth/login", userData);
};