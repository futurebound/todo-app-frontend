// import Button from "@/components/button"
import { Button } from "react-native"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavigation } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"

const SignUpScreen = () => {
   const navigation = useNavigation<AuthScreenNavigation<"SignUp">>()
   const navigateToSignInScreen = () => {
      navigation.navigate("SignIn")
   }

   return (
      <SafeAreaWrapper>
         <Box>
            <Text>Sign Up Screen</Text>
            <Button title="Navigate to Sign In" onPress={navigateToSignInScreen}/>
         </Box>
      </SafeAreaWrapper>
   )
}

export default SignUpScreen