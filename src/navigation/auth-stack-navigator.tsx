import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import WelcomeScreen from "@/screens/welcome-screen";
import SignInScreen from "@/screens/signin-screen";
import SignUpScreen from "@/screens/signup-screen";

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
   return (
      <Stack.Navigator>
         {/* order of components determines which screen initially loads */}
         <Stack.Screen name="Welcome" component={WelcomeScreen}/>
         <Stack.Screen name="SignIn" component={SignInScreen}/>
         <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </Stack.Navigator>
   )
}

export default AuthStackNavigator