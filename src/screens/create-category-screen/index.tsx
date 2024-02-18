import Button from "@/components/shared/button"
import NavigateBack from "@/components/shared/navigate-back"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { CategoriesNavigationType, CategoriesStackParamList } from "@/navigation/types"
import axiosInstance, { BASE_URL, fetcher } from "@/services/config"
import { ICategory, ICategoryRequest, IColor, IIcon } from "@/types"
import { getColors, getIcons } from "@/utils/helpers"
import { Box, Text, Theme } from "@/utils/theme"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { useTheme } from "@shopify/restyle"
import React, { useState } from "react"
import { Pressable, TextInput } from "react-native"
import useSWR, { useSWRConfig } from "swr"
import useSWRMutation from "swr/mutation"
import { MaterialCommunityIcons } from "@expo/vector-icons"


const COLORS = getColors()
const ICONS = getIcons()
const DEFAULT_COLOR = COLORS[0]
const DEFAULT_ICON = ICONS[0]


// Category CRUD request definitions
const createCategoryRequest = async (url: string, { arg }: { arg: ICategoryRequest }) => {
   try {
      await axiosInstance.post(url, { ...arg })
   } catch (error) {
      console.log("error in create-category-screen createCategoryRequest()", error)
      throw error
   }
}

const updateCategoryRequest = async (url: string, { arg }: { arg: ICategoryRequest }) => {
   try {
      await axiosInstance.put(url, { ...arg })
   } catch (error) {
      console.log("error in create-category-screen createCategoryRequest()", error)
      throw error
   }
}
 
const deleteCategoryRequest = async (url: string, { arg }: { arg: { id: string } }) => {
   try {
      await axiosInstance.delete(url + "/" + arg.id)
   } catch (error) {
      console.log("error in create-category-screen deleteCategoryRequest()", error)
      throw error
   }
}


// type definitions
type CreateCategoryRouteTypes = RouteProp<CategoriesStackParamList, "CreateCategory">


const CreateCategoryScreen = () => {
   const theme = useTheme<Theme>()
   // const navigation = useNavigation()
   const navigation = useNavigation<CategoriesNavigationType>()
   // const {data, isLoading, error } = useSWR<ICategory[]>("category/getAll", fetcher)

   const route = useRoute<CreateCategoryRouteTypes>()
   const isEditing = route.params.category ? true : false

   const { mutate } = useSWRConfig()
   const { trigger, isMutating } = useSWRMutation("category/create", createCategoryRequest)
   const { trigger: updateTrigger } = useSWRMutation("category/update", updateCategoryRequest)
   const { trigger: deleteTrigger } = useSWRMutation("category/delete", deleteCategoryRequest)

   // ?? -> checks if operator on left is null || undefined, and if so 
   //    assigns value to the right
   const [newCategory, setNewCategory] = 
      useState<Omit<ICategory, "_id" | "user" | "isEditable">>({
         name: route.params.category?.name ?? "",
         color: route.params.category?.color ?? DEFAULT_COLOR,
         icon: route.params.category?.icon ?? DEFAULT_ICON
   })


   const createNewCategory = async () => {
      try {
         if (isEditing) {
            const updatedCategoryitem = {
               ...route.params.category,
               ...newCategory
            }
            await updateTrigger({ ...updatedCategoryitem })
         } else {
            await trigger({ ...newCategory })
         }

         await mutate(BASE_URL + "category")
         // TODO: navigate back to category screen in a way that triggers /category/getAll
         // navigation.goBack()
         axiosInstance.get
         navigation.navigate("Categories")

      } catch (error) {
         console.log("error in createNewCategory()", error)
         throw error
      }
   }

   const updateColor = (color: IColor) => {
      setNewCategory((prev) => { return { ...prev, color } })
   }

   const updateIcon = (icon: IIcon) => {
      setNewCategory((prev) => { return { ...prev, icon } })
   }
   
   const deleteCategory = async () => {
      try {
         if (isEditing && route.params.category?._id) {
            await deleteTrigger({ id: route.params.category._id })
         }
         await mutate(BASE_URL + "category")
         // TODO: navigate back to category screen in a way that triggers /category/getAll
         navigation.goBack()

      } catch (error) {
         console.log("error in deleteCategory()", error)
         throw error
      }
   }


   return (
      <SafeAreaWrapper>
         <Box flex={1} mx="4">
            <Box height={16}/>
            <Box flexDirection="row" justifyContent="space-between" alignItems="center"/>
            <NavigateBack />
            {isEditing && (
               <Pressable onPress={deleteCategory}>
                  <MaterialCommunityIcons name="delete" size={24} color={theme.colors.rose500}/>
               </Pressable>
            )}
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
            <Box bg="white" width={80} p="2" mb="4" borderRadius="rounded-2xl" alignItems="center">
               <Text variant="textBase" fontWeight="400" color={newCategory.color.name as any}>
                  Colors
               </Text>
            </Box>

            <Box flexDirection="row" justifyContent="space-evenly">
               {COLORS.map((_color) => {
                  return (
                     <Pressable key={_color.id} onPress={() => { updateColor(_color) }}>
                        <Box 
                           style={{ backgroundColor: _color.code }}
                           width={24} 
                           height={24}
                           borderRadius="rounded-2xl"
                        />
                     </Pressable>
                  )
               })}
            </Box>
         </Box>  

         <Box height={24}/>
         <Box bg="gray200" p="4" borderRadius="rounded-2xl">
            <Box bg="white" width={80} p="2" mb="4" borderRadius="rounded-2xl" alignItems="center">
               <Text variant="textBase" fontWeight="400" color={newCategory.color.name as any}>
                  {newCategory.icon.symbol}
               </Text>
            </Box>

            <Box flexDirection="row" justifyContent="space-evenly">
               {ICONS.map((icon) => {
                  return (
                     <Pressable key={icon.id} onPress={() => { updateIcon(icon) }}>
                        <Box width={24} height={24} borderRadius="rounded-2xl">
                           <Text>{icon.symbol}</Text>
                        </Box>
                     </Pressable>
                  )
               })}
            </Box>
         </Box>  

         <Box position="absolute" bottom={4} left={0} right={0}>
            <Button 
               label={isEditing ? "Edit Category" : "Create New Category"} 
               onPress={createNewCategory} 
            />
         </Box>
      </SafeAreaWrapper>
   )
}

export default CreateCategoryScreen