import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import HomeScreen from "@/screens/home-screen";
import HomeStackNavigator from "./home-stack-navigator";
import CompletedTaskScreen from "@/screens/completed-task-screen";
import TodayTaskScreen from "@/screens/today-task-screen";
import CategoriesStackNavigator from "./categories-stack-navigator";
import Icons from "@/components/shared/icons";
import { useTheme } from "@shopify/restyle";


const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const BottomTabNavigator = () => {
   const theme = useTheme()

   return (
      <Tab.Navigator
         screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: theme.colors.gray550,
            tabBarHideOnKeyboard: true
         }}
      >
         {/* <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
         <Tab.Screen name="Completed" component={CompletedTaskScreen} />
         <Tab.Screen name="Today" component={TodayTaskScreen} />
         <Tab.Screen name="CategoriesStack" component={CategoriesStackNavigator} /> */}

         <Tab.Screen 
            name="HomeStack"
            component={HomeStackNavigator}
            options={() => ({
               title: "Home",
               tabBarIcon: ({ color }) => <Icons name="home" color={color} />,
               headerShown: false
            })}
         />
         <Tab.Screen 
            name="Today"
            component={TodayTaskScreen}
            options={() => ({
               title: "Today",
               tabBarIcon: ({ color }) => <Icons name="calendar" color={color} />,
               headerShown: false
            })}
         />
         <Tab.Screen 
            name="Completed"
            component={CompletedTaskScreen}
            options={() => ({
               title: "Completed",
               tabBarIcon: ({ color }) => <Icons name="completed" color={color} />,
               headerShown: false
            })}
         />
         <Tab.Screen 
            name="CategoriesStack"
            component={CategoriesStackNavigator}
            options={() => ({
               title: "Categories",
               tabBarIcon: ({ color }) => <Icons name="categories" color={color} />,
               headerShown: false
            })}
         />
      </Tab.Navigator>
   )
}

export default BottomTabNavigator