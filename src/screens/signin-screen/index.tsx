
import { Pressable } from "react-native"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavigation } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Input from "@/components/shared/input"
import Button from "@/components/shared/button"
import { IUser } from "@/types"
import { loginUser } from "@/services/api"
import useUserGlobalStore from "@/store/useUserGlobalStore"

const SignInScreen = () => {
   const navigation = useNavigation<AuthScreenNavigation<"SignIn">>()
   const navigateToSignUpScreen = () => {
      navigation.navigate("SignUp")
   }

   // const {
   //    control, handleSubmit, formState: { errors }
   // } = useForm<Omit<IUser, "name">>({
   //    defaultValues: {
   //       email: "",
   //       password: ""
   //    }
   // })

   const { updateUser } = useUserGlobalStore()

   const onSubmit = async(data: Omit<IUser, "name">) => {
      try {
         // console.log(`data`, JSON.stringify(data, null, 2))
         const { email, password } = data
         const _user = await loginUser({
            email: email,
            password: password
         })
         updateUser({
            name: _user.name,
            email: _user.email
         })
      } catch (error) {
         console.log("error in signin/onSubmit()")
         throw error
      }
   }

   return (
      <SafeAreaWrapper>
         <Box flex={1} px="5" justifyContent="center">
            <Text variant="textXl" fontWeight="500" mb="6">
               Welcome back!
            </Text>

            <Input label="EMAIL" placeholder="email"/>
            <Input label="PASSWORD" placeholder="password"/>

            <Pressable onPress={navigateToSignUpScreen}>
               <Text color="primary" textAlign="right">
                  Need to register?
               </Text>
            </Pressable>
            
            <Button label="login" onPress={navigateToSignUpScreen} uppercase/>
         </Box>
      </SafeAreaWrapper>
   )
}

export default SignInScreen