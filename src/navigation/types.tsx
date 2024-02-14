import { NavigatorScreenParams } from "@react-navigation/native"

/**
 * All the screens in the AuthStack
 */
export type AuthStackParamList = {
   Welcome: undefined
   SignIn: undefined
   SignUp: undefined
}

/**
 * All the screens in the bottom nav tab
 */
export type RootBottomTabParamList = {
   HomeStack: NavigatorScreenParams<HomeStackParamList>
   Today: undefined
   Completed: undefined
   CategoriesStack: NavigatorScreenParams<CategoriesStackParamList>
}

export type HomeStackParamList = {
   Home: undefined
   EditTask: undefined
}

export type CategoriesStackParamList = {
   Categories: undefined
   Category: {
      id: string
   }
   CreateCategory: {
      id?: string // id? makes optional
   }
}

export type AppStackParamList = {
   Root: NavigatorScreenParams<RootBottomTabParamList>
   Settings: undefined
}

export type RootStackParamList = {
   AppStack: NavigatorScreenParams<AppStackParamList>
   AuthStack: NavigatorScreenParams<AuthStackParamList>
}

/**
 * Convention -> declare global namespace for the useNavigation()
 *    hook to provide type safety
 */
declare global {
   namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
   }
}