import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavigation } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Input from "@/components/shared/input"
import Button from "@/components/shared/button"
import { Pressable } from "react-native"

const SignUpScreen = () => {
   const navigation = useNavigation<AuthScreenNavigation<"SignUp">>()
   const navigateToSignInScreen = () => {
      navigation.navigate("SignIn")
   }

   return (
      <SafeAreaWrapper>
         <Box flex={1} px="5" mt="10">
            <Text variant="textXl" fontWeight="500" mb="6">
               Welcome to ToDone
            </Text>

            <Input label="USERNAME" placeholder="Username"/>
            <Input label="EMAIL" placeholder="email"/>
            <Input label="PASSWORD" placeholder="password"/>

            <Pressable onPress={navigateToSignInScreen}>
               <Text color="primary" textAlign="right">
                  Already have an account? Log in
               </Text>
            </Pressable>
            
            <Button label="register" onPress={navigateToSignInScreen} uppercase/>
         </Box>
      </SafeAreaWrapper>
   )
}

export default SignUpScreen