import axios from 'axios'


const userInstance = axios.create({
    baseURL: "https://accesslabbeta.stagingserverhub.com/api/b2b",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

userInstance.interceptors.request.use((request)=>{
    const token = localStorage.getItem("jwt")
    request.headers.Authorization = `Bearer ${token}`
    return request;  
})






export { userInstance };