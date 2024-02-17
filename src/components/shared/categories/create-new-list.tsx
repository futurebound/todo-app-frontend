import { CategoriesNavigationType } from "@/navigation/types"
import { Box, Text, Theme } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { Pressable } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "@shopify/restyle"


const CreateNewList = () => {
   const theme = useTheme<Theme>()

   const navigation = useNavigation<CategoriesNavigationType>()
   const navigateToCreateCategory = () => {
      navigation.navigate("CreateCategory", {})
   }

   return (
      <Pressable onPress={navigateToCreateCategory}>
         <Box p="4" bg="lightGray" borderRadius="rounded-5xl" flexDirection="row" alignItems="center">
            <Feather name="plus" size={24} color={theme.colors.gray500}/>
            <Text variant="textXl" fontWeight="400" color="gray650" ml="3">
               Create new List
            </Text>
         </Box>
      </Pressable>
   )
}

export default CreateNewList