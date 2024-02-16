import { IUser } from "@/types"
import axiosInstance, { USER_TOKEN_NAME, saveToken } from "./config"


type RegisterUserTypes = IUser

export const registerUser = async ({ 
      name, email, password
} : RegisterUserTypes) => {
   try {
      const response = await axiosInstance.post("/user/create", {
         name, email, password
      })
      return response.data.user

   } catch (error) {
      console.log("error in registerUser()", error)
      throw error
   }
}


// Omit<IUser, "name"> -> TypeScript utility that allows us to omit a property
//    from a type
type LoginUserTypes = Omit<IUser, "name">

export const loginUser = async ({ email, password } : LoginUserTypes) => {
   try {
      const response = await axiosInstance.post("/user/login", {
         email, password
      })

      // get user token from our back end user.controller loginUser() response
      //    add it to headers of axios instance requests (similar to thunderbolt
      //    where we added it manually to each request), then save the token in 
      //    SecureStore as (key, value) pair
      const _token = response.data.token
      axiosInstance.defaults.headers.common["Authorization"] = _token
      saveToken(USER_TOKEN_NAME, _token)
      return response.data.user

   } catch (error) {
      console.log("error in loginUser()", error)
      throw error
   }
}