
import { Pressable } from "react-native"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavigation } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Input from "@/components/shared/input"
import Button from "@/components/shared/button"

const SignInScreen = () => {
   const navigation = useNavigation<AuthScreenNavigation<"SignIn">>()
   const navigateToSignUpScreen = () => {
      navigation.navigate("SignUp")
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