import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import axios from "axios";

export const googleLoginHandler = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    //사용자 콘솔 
    const user = result.user;
    console.log("사용자 이메일:", user.email);
    console.log("사용자 이름:", user.displayName);
    console.log("이메일 확인 여부:", user.emailVerified);

    const idToken = await result.user.getIdToken();
    console.log(idToken); //토큰값 확인
    return idToken;
  } catch (error) {
    console.error("Google 로그인 실패:", error);
    throw error;
  }
};

export const sendTokenToBackend = async (idToken) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_MY_SERVER_URL}/google-login`,
      {
        token: idToken,
      }
    );
    return response.data;
  } catch (error) {
    console.error("백엔드로 토큰 전송 실패:", error);
    throw error;
  }
};
