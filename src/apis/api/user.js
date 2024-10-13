import { baseInstance } from "../utils/instance";

export const login = async (id, pwd) => {
  const response = await baseInstance.post(`${import.meta.env.VITE_MY_SERVER_URL}/login`, { id: id, pwd: pwd });
  return response;
};
