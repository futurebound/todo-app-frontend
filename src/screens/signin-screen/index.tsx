// import Button from "@/components/button"
import { Button } from "react-native"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavigation } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"

const SignInScreen = () => {
   const navigation = useNavigation<AuthScreenNavigation<"SignIn">>()
   const navigateToSignUpScreen = () => {
      navigation.navigate("SignUp")
   }

   return (
      <SafeAreaWrapper>
         <Box>
            <Text>Sign In Screen</Text>
            <Button title="Navigate to Sign Up" onPress={navigateToSignUpScreen}/>
         </Box>
      </SafeAreaWrapper>
   )
}

export default SignInScreen