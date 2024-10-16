import { authInstance } from "../utils/instance"

export const addFavorite = async(productId, productNum)=>{
  const response = await authInstance.post(`${import.meta.env.VITE_MY_SERVER_URL}/api/favorites/add`)
  return response;
}

export const removeFavorite = async(productId, productNum)=>{
  const response = await authInstance.post(`${import.meta.env.VITE_MY_SERVER_URL}/api/favorites/remove`)
  return response;

}

export const getMyFavoritesList = async()=>{
  const response = await authInstance.get(`${import.meta.env.VITE_MY_SERVER_URL}/api/favorites/list`)
  return response
}