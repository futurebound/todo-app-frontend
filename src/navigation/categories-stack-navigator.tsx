import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CategoriesStackParamList } from "./types"
import CategoriesScreen from "@/screens/categories-screen"
import CategoryScreen from "@/screens/category-screen"


const Stack = createNativeStackNavigator<CategoriesStackParamList>()

const CategoriesStackNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Categories" component={CategoriesScreen} />
         <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
   )
}

export default CategoriesStackNavigator