import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AuthStackNavigator from './auth-stack-navigator'
import AppStackNavigator from './app-stack-navigator'

const Navigation = () => {
   // this will hold info about whether a logged in user or not
   const userIsLoggedIn = true

   return (
      // wrap whole nav section in NavContainer component
      <NavigationContainer>
         {/* conditionally render AppStack || AuthStack */}
         {/* <AuthStackNavigator /> */}
         <AppStackNavigator />
         
      </NavigationContainer>
   )
}

export default Navigation