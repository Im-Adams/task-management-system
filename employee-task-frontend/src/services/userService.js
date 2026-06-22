import api from "./api";

export const getProfile = () => {

  const email = localStorage.getItem("email");

  if (!email) {
    throw new Error("Email not found in localStorage");
  }

  return api.get(`/api/users/profile?email=${email}`);
};