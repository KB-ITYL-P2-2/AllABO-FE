import { authInstance } from "../utils/instance"

export const getMyFavoritesList = async()=>{
  const response = await authInstance.get(`${import.meta.env.VITE_MY_SERVER_URL}/api/favorites/list`)
  return response
}