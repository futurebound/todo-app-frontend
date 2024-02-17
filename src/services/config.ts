import axios from "axios"
import * as SecureStore from "expo-secure-store"
// import REACT_APP_DEV_BASE_URL from "@env"

// export const BASE_URL = "http://localhost:3000/"
export const BASE_URL = "https://d687-50-34-35-210.ngrok-free.app/"
// export const BASE_URL = REACT_APP_DEV_BASE_URL
const TIMEOUT = 30000
export const USER_TOKEN_NAME = "user_token"

const axiosInstance = axios.create({
   baseURL: BASE_URL,
   timeout: TIMEOUT,
})

// define interceptors on this axios instance
axiosInstance.interceptors.request.use(async (req) => {
   try {
      // try getting authenticated user token from local storage
      const accessToken = await SecureStore.getItemAsync(USER_TOKEN_NAME)
      req.headers.Authorization = accessToken
      return req

   } catch (error) {
      console.log("error retreiving access token")
      return req
   }
})

/**
 * Save authenticated user access token in SecureStore.
 */
export const saveToken = async (key: string, value: string) => {
   try {
      await SecureStore.setItemAsync(key, value)
   } catch (error) {
      console.log("error in saveToken()", error)
      throw error
   }
}

// fetcher function for SWR
export const fetcher = (url : string) => 
   axiosInstance.get(url).then((res) => res.data)


export default axiosInstance