
import { userInstance } from "../axios/axiosInstance";

export const loginApi = (values) => {
    console.log(values,"values");
    return userInstance.post("/login",values)
}