import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
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
      <SafeAreaWrapper>
         <Box>
            <Text>Welcome Screen</Text>
            <Button title="Navigate to Sign In" onPress={navigateToSignInScreen}/>
            <Button title="Navigate to Sign Up" onPress={navigateToSignUpScreen}/>
         </Box>
      </SafeAreaWrapper>
   )
}

export default WelcomeScreen