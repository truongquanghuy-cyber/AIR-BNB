// import axios from "axios";

// const TOKEN_API = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMiIsIkhldEhhblN0cmluZyI6IjI3LzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1MDk4MjQwMDAwMCIsIm5iZiI6MTcyMjE4NjAwMCwiZXhwIjoxNzUxMTMwMDAwfQ.QQdi1xMURGpagkPmME-LaXtyy2LAIh_ej21mTCSwyc4"
  

// const axiosClient = axios.create({
//     baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
//     timeout: 5 * 60 * 1000,
//     headers: {
//         tokenCybersoft: TOKEN_API,
//     },
// });

// axiosClient.interceptors.response.use(
//     (value) => {
//         return value.data;
//     },

//     (error) => {
//         return Promise.reject(error);
//     },
// )

// axiosClient({
//     method: "POST",
//     url: "/auth/signin",
   
// }).then(r => {
//     console.log(r);
// });
 

// axiosClient.interceptors.response.use(
//     (value) => {
//         return value.data;
//     },

//     (error) => {
//         return Promise.reject(error);
//     },
// )

// axiosClient({
//     method: "POST",
//     url: "/auth/signin",
   
// }).then(r => {
//     console.log(r);
// });

import axios from "axios"

const TOKEN_API =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMiIsIkhldEhhblN0cmluZyI6IjI3LzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1MDk4MjQwMDAwMCIsIm5iZiI6MTcyMjE4NjAwMCwiZXhwIjoxNzUxMTMwMDAwfQ.QQdi1xMURGpagkPmME-LaXtyy2LAIh_ej21mTCSwyc4"

const axiosClient = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
  timeout: 5 * 60 * 1000,
  headers: {
    tokenCybersoft: TOKEN_API,
  },
})

axiosClient.interceptors.response.use(
  (value) => {
    return value.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const signIn = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosClient({
      method: "POST",
      url: "/auth/signin",
      data: { email, password },
    })
    return response
  } catch (error) {
    throw error
  }
}

// {
//     "id": 0,
//     "name": "string",
//     "email": "string",
//     "password": "string",
//     "phone": "string",
//     "birthday": "string",
//     "gender": true,
//     "role": "string"
//   }

export const signup = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axiosClient({
        method: "POST",
        url: "/auth/signup",
        data: { email, password },
      })
      return response
    } catch (error) {
      throw error
    }
  }

export default axiosClient










