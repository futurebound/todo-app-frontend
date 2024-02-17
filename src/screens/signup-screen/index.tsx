import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavigation } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Input from "@/components/shared/input"
import Button from "@/components/shared/button"
import { Pressable } from "react-native"
import { IUser } from "@/types"
import { registerUser } from "@/services/api"
import { Controller, useForm } from "react-hook-form"
import axios from "axios"

const SignUpScreen = () => {
   const navigation = useNavigation<AuthScreenNavigation<"SignUp">>()
   const navigateToSignInScreen = () => {
      navigation.navigate("SignIn")
   }

   const {
      control, handleSubmit, formState: {errors}
   } = useForm<IUser>({
      defaultValues: {
         email: "",
         password: ""
      }
   })

   const onSubmit = async (data: IUser) => {
      try {
         const { email, name, password } = data
         console.log(`data`, JSON.stringify(data, null, 2))
         await registerUser({
            email: email, 
            name: name, 
            password: password
         })
         navigateToSignInScreen()
      } catch (error) {
         console.log("error in SignUp.onSubmit()", error)
      }
   }

   
   const onSubmitTestAxiosCreateUser = async (data: IUser) => {
      try {
         const { email, name, password } = data
         console.log(`data`, JSON.stringify(data, null, 2))
         const response = await axios.post("http://localhost:3000/user/create", {
            name: name,
            email: email,
            password: password
         })
         if (response.status === 201) {
            console.log(`You have logged in as: ${JSON.stringify(response.data)}`)
         }
      } catch (error) {
         console.log("error in onSubmitTestAxiosLogin()", error)
      }
   }

   return (
      <SafeAreaWrapper>
         <Box flex={1} px="5" mt="10">
            <Text variant="textXl" fontWeight="500" mb="6">
               Welcome to GamerDo
            </Text>

            <Controller
               control={control}
               rules={{ required: true }}
               render={({ field: { onChange, onBlur, value } }) => (
                  <Input label="Name" placeholder="Name" onBlur={onBlur} onChangeText={onChange} value={value} error={errors.name}/>
               )}
               name="name"
            />
            <Controller
               control={control}
               rules={{ required: true }}
               render={({ field: { onChange, onBlur, value } }) => (
                  <Input label="Email" placeholder="Email" onBlur={onBlur} onChangeText={onChange} value={value} error={errors.email}/>
               )}
               name="email"
            />
            <Controller
               control={control}
               rules={{ required: true }}
               render={({ field: { onChange, onBlur, value } }) => (
                  <Input label="Password" placeholder="Password" onBlur={onBlur} onChangeText={onChange} value={value} error={errors.email}/>
               )}
               name="password"
            />

            {/* <Input label="EMAIL" placeholder="email"/>
            <Input label="PASSWORD" placeholder="password"/> */}

            <Pressable onPress={navigateToSignInScreen}>
               <Text color="primary" textAlign="right">
                  Already have an account? Log in
               </Text>
            </Pressable>
            
            <Button label="register" onPress={handleSubmit(onSubmit)} uppercase/>
            {/* <Button label="register" onPress={handleSubmit(onSubmitTestAxiosCreateUser)} uppercase/> */}
            {/* <Button label="register" onPress={handleSubmit(onSubmitTestAxiosGetAPI)} uppercase/> */}
         </Box>
      </SafeAreaWrapper>
   )
}

export default SignUpScreen