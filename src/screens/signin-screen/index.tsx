// import Button from "@/components/button"
import { Button } from "react-native"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavigation } from "@/navigation/types"

const SignInScreen = () => {
   const navigation = useNavigation<AuthScreenNavigation<"SignIn">>()
   const navigateToSignUpScreen = () => {
      navigation.navigate("SignUp")
   }

   return (
      <Box>
         <Text>Sign In Screen</Text>
         <Button title="Navigate to Sign Up" onPress={navigateToSignUpScreen}/>
      </Box>
   )
}

export default SignInScreen