import axios from "axios";
const TOKEN_API = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMiIsIkhldEhhblN0cmluZyI6IjI3LzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1MDk4MjQwMDAwMCIsIm5iZiI6MTcyMjE4NjAwMCwiZXhwIjoxNzUxMTMwMDAwfQ.QQdi1xMURGpagkPmME-LaXtyy2LAIh_ej21mTCSwyc4"


const axiosClient = axios.create({
    baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
    timeout: 5 * 60 * 1000,
    headers: {
        tokenCybersoft: TOKEN_API,
    },
});

axiosClient.interceptors.response.use(
    (value) => {
        return value.data;
    },

    (error) => {
        return Promise.reject(error);
    },
)

axiosClient({
    method: "GET",  
    url: "/dat-phong",
   
}).then(r => {
    console.log(r);
});






