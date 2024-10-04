import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";

export const googleLoginHandler = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken(); 
    console.log(idToken)//토큰값 확인
    return idToken;
  } catch (error) {
    console.error("Google 로그인 실패:", error);
    throw error;
  }
};

export const sendTokenToBackend = async (idToken) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_MY_SERVER_URL}/google-login`, {
      token: idToken,
    });
    return response.data;
  } catch (error) {
    console.error("백엔드로 토큰 전송 실패:", error);
    throw error;
  }
};
