import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import AuthStackNavigator from './auth-stack-navigator'
import AppStackNavigator from './app-stack-navigator'
import useUserGlobalStore from '@/store/useUserGlobalStore'

const Navigation = () => {
   const {user, updateUser} = useUserGlobalStore()

   /* testing code to confirm that able to update app state with zustand
      and that we can log a user in properly
   */
   console.log(`user`, JSON.stringify(user, null, 2))
   // DEV TOOL: toggle this to force logout user
   // useEffect(() => {
   //    // TEST: simulate user NOT logged in -> should <AuthStackNavigator />
   //    updateUser(null)

   //    // TEST: simulate user logged in -> should <AppStackNavigator />
   //    // updateUser({
   //    //    email: "test@gmail.com",
   //    //    name: "n1"
   //    // })
   //    return () => {}
   // }, [])

   return (
      <NavigationContainer>
         {/* conditionally render App (if logged in) or Auth (if not) */}
         { user ? <AppStackNavigator /> : <AuthStackNavigator /> }
         
      </NavigationContainer>
   )
}

export default Navigation