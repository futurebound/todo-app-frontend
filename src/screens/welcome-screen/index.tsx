import Button from "@/components/shared/button"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigation } from "@/navigation/types"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { Image } from "react-native"


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
         <LinearGradient 
            style={{ flex: 1 }} 
            colors={["#ffffff", "#fef8ff", "#fcecff", "#f8daff", "fae2ff", "#fef8ff", "#ffffff"]}
         >
            <Box flex={1} justifyContent="center">
               <Box alignItems="center">
                  <Image 
                     source={{
                        uri: "https://img.freepik.com/free-vector/hand-drawn-tick_78370-490.jpg",
                        width: 120,
                        height: 120
                     }}
                  />
               </Box>
               <Text textAlign="center" variant="textXl" fontWeight="500">
                  Welcome ToDo'er
               </Text>
               <Box my="3" mx="10">
                  <Button 
                     label="Start getting things done" 
                     onPress={navigateToSignUpScreen}
                     onLongPress={() => console.log("start journey onLongPress()")}/>
               </Box>
               {/* <Button 
                  label="Navigate to Sign In" 
                  onPress={navigateToSignInScreen}/>
               <Button 
                  label="Navigate to Sign Up" 
                  onPress={navigateToSignUpScreen}/> */}
            </Box>
         </LinearGradient>
      </SafeAreaWrapper>
   )
}

export default WelcomeScreen