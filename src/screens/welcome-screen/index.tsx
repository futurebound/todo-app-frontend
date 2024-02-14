import { AuthScreenNavigation } from "@/navigation/types"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"

const WelcomeScreen = () => {
   const navigation = useNavigation<AuthScreenNavigation<"Welcome">>()
   const navigateToSignInScreen = () => {
      navigation.navigate("SignIn")
   }
   const navigateToSignUpScreen = () => {
      navigation.navigate("SignUp")
   }


   return (
      <Box>
         <Text>Welcome Screen</Text>
         <Button title="Navigate to Sign In" onPress={navigateToSignInScreen}/>
         <Button title="Navigate to Sign Up" onPress={navigateToSignUpScreen}/>
      </Box>
   )
}

export default WelcomeScreen