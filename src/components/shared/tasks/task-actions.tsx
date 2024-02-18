import { ICategory, ITaskRequest } from "@/types"
import { Box, Text } from "@/utils/theme"
import { useState } from "react"
import { FlatList, Pressable, TextInput } from "react-native"
import { format, isToday } from "date-fns"
import useSWR from "swr"
import Loader from "../loader"
import { fetcher } from "@/services/config"


type TaskActionsProps = {
   categoryId: string
}

export const today = new Date()
export const todaysISODate = new Date()
todaysISODate.setHours(0, 0, 0, 0)

const TaskActions = ({ categoryId }: TaskActionsProps) => {
   const [newTask, setNewTask] = useState<ITaskRequest>({
      categoryId: categoryId,
      date: todaysISODate.toISOString(),
      isCompleted: false,
      name: ""
   })

   const [isSelectingCategory, setIsSelectingCategory] = useState<boolean>(false)

   const { data: categories, isLoading} = useSWR<ICategory[]>("category/getAll", fetcher)
   if (isLoading || !categories) {
      return <Loader />
   }

   const selectedCategory = categories?.find((_category) => _category._id === categoryId)


   return (
      <Box bg="lightGray" p="4" borderRadius="rounded-5xl" flexDirection="row" position="relative">
         <TextInput placeholder="Crate a new task"
            style={{
               padding: 8,
               fontSize: 16,
               width: "50%"
            }}
            maxLength={36}
            textAlignVertical="center"
            value={newTask.name}
            onChangeText={(text) => {
               setNewTask((prev) => {
                  return {
                     ... prev,
                     name: text
                  }
               })
            }}
         />

         <Box flexDirection="row" alignItems="center">
            <Pressable>
               <Box flexDirection="row" alignItems="center" bg="white" p="2" borderRadius="rounded-xl">
                  <Text>
                     { isToday(new Date(newTask.date)) ? "Today" : format(new Date(newTask.date), "MMM dd")}
                  </Text>
               </Box>
            </Pressable>

            <Box width={12} />
            <Pressable onPress={() => { setIsSelectingCategory((prev) => !prev)}}>
               <Box bg="white" flexDirection="row" alignItems="center" p="2" borderRadius="rounded-xl">
                  <Box width={12} height={12} borderRadius="rounded" borderWidth={2} mr="1" 
                     style={{ borderColor: selectedCategory?.color.code }} />
                  <Text style={{ color: selectedCategory?.color.code }}>{selectedCategory?.name}</Text>
               </Box>
            </Pressable>
         </Box>
         
         {isSelectingCategory && 
            <Box position="absolute" right={40} bottom={-120}>
               <FlatList data={categories}
                  renderItem={({ item, index }) => {
                     return <Pressable>
                        <Box bg="gray250" p="2"
                           borderTopStartRadius={index === 0 ? "rounded-3xl" : "none"} 
                           borderTopEndRadius={index === 0 ? "rounded-3xl" : "none"} 
                           borderBottomStartRadius={categories?.length - 1 === index ? "rounded-2xl" : "none"} 
                           borderBottomEndRadius={categories?.length - 1 === index ? "rounded-2xl" : "none"} 
                        >
                           <Box>
                              <Text>{item.icon.symbol}</Text>
                              <Text ml="2">{item.name}</Text>
                           </Box>
                        </Box>
                     </Pressable>
                  }}
               />
            </Box>
         }


      </Box>
   )
}

export default TaskActions