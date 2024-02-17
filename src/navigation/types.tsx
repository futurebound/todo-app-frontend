import { ICategory } from "@/types"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"


/**
 * Convention -> declare global namespace for the useNavigation()
 *    hook to provide type safety
 */
declare global {
   namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
   }
}


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
      category?: ICategory // id? makes optional
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

export type RootTabScreenProps<Screen extends keyof RootBottomTabParamList> =
   CompositeScreenProps<BottomTabScreenProps<RootBottomTabParamList, Screen>,
   NativeStackScreenProps<RootBottomTabParamList>
>

export type AuthScreenNavigation <RouteName extends keyof AuthStackParamList> =
   CompositeNavigationProp<
      NativeStackNavigationProp<AuthStackParamList, RouteName>,
      NativeStackNavigationProp<AppStackParamList, "Root">
>

export type CategoriesNavigationType = 
   NativeStackNavigationProp<CategoriesStackParamList>
