import Button from "@/components/shared/button"
import NavigateBack from "@/components/shared/navigate-back"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { ICategory } from "@/types"
import { getColors, getIcons } from "@/utils/helpers"
import { Box, Text, Theme } from "@/utils/theme"
import { useTheme } from "@shopify/restyle"
import { useState } from "react"
import { Pressable, TextInput } from "react-native"

const COLORS = getColors()
const ICONS = getIcons()
const DEFAULT_COLOR = COLORS[0]
const DEFAULT_ICON = ICONS[0]

const CreateCategoryScreen = () => {
   const theme = useTheme<Theme>()
   const [newCategory, setNewCategory] = 
      useState<Omit<ICategory, "_id" | "user" | "isEditable">>({
         name: "",
         color: DEFAULT_COLOR,
         icon: DEFAULT_ICON
      })

   console.log(`newCategory`, JSON.stringify(newCategory, null, 2))
   const createNewCategory = async () => {
      try {

      } catch (error) {
         console.log("error in createNewCategory()", error)
         throw error
      }
   }

   return (
      <SafeAreaWrapper>
         <Box flex={1} mx="4">
            <Box height={16}/>
            <Box flexDirection="row" justifyContent="space-between" alignItems="center"/>
            <NavigateBack />
         </Box>
         <Box height={16}/>
         <Box bg="gray250" borderRadius="rounded-2xl">
            <TextInput
               style={{
                  fontSize: 20,
                  lineHeight: 26,
                  padding: 16
               }}
               maxLength={36}
               placeholder="Create new list"
               placeholderTextColor={theme.colors.gray5}
               onChangeText={(text) => {
                  setNewCategory((prev) => {
                     return {
                        ... prev,
                        name: text
                     }
                  })
               }}
            />
         </Box>

         <Box height={24}/>
         <Box bg="gray200" p="4" borderRadius="rounded-2xl">
            <Box bg="white" width={64} p="2" borderRadius="rounded-2xl" alignItems="center">
               <Text>Colors</Text>
            </Box>
            <Box flexDirection="row" justifyContent="space-evenly">
               {COLORS.map(_color => {
                     return (
                        <Pressable key={_color.id}>
                           <Box 
                              style={{
                                 backgroundColor: _color.code
                              }}
                              width={24} 
                              height={24}
                              borderRadius="rounded-2xl"
                           />
                        </Pressable>
                     )
                  })
               }
            </Box>
         </Box>  

         <Box style={{ marginTop: "100%" }}>
            <Button label="Create new Category" onPress={createNewCategory} />
         </Box>
      </SafeAreaWrapper>
   )
}

export default CreateCategoryScreen