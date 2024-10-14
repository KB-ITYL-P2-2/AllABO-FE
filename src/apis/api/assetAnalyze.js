import { authInstance } from "../utils/instance";

export const getSaving = () => {
  const response = authInstance.post(`${import.meta.env.MY_SERVER_URL}/assets/saving`);
  return response;
};
export const getSavingRatio = () => {
  const response = authInstance.post(`${import.meta.env.MY_SERVER_URL}/assets/saving-ratio`);
  return response;
};
export const getLoan = () => {
  const response = authInstance.post(`${import.meta.env.MY_SERVER_URL}/assets/loan`);
  return response;
};
export const getIncomeLevel = () => {
  const response = authInstance.post(`${import.meta.env.MY_SERVER_URL}/assets/income-level`);
  return response;
};
