import { baseInstance } from "../utils/instance"

export const postSurvey = (surveyValue) => {
    const response = baseInstance.post(import.meta.env.VITE_MY_SERVER_URL, {surveyValue: surveyValue})
    return response;
}