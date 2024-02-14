import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import HomeScreen from "@/screens/home-screen";
import HomeStackNavigator from "./home-stack-navigator";
import CompletedTaskScreen from "@/screens/completed-task-screen";
import TodayTaskScreen from "@/screens/today-task-screen";
import CategoriesStackNavigator from "./categories-stack-navigator";


const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const BottomTabNavigator = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
         <Tab.Screen name="Completed" component={CompletedTaskScreen} />
         <Tab.Screen name="Today" component={TodayTaskScreen} />
         <Tab.Screen name="CategoriesStack" component={CategoriesStackNavigator} />
      </Tab.Navigator>
   )
}

export default BottomTabNavigator