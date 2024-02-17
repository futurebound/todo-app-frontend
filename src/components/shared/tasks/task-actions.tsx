import { ITaskRequest } from "@/types"
import { Box } from "@/utils/theme"
import { useState } from "react"
import { TextInput } from "react-native"


type TaskActionsProps = {
   categoryId: string
}

const todaysISODate = new Date().toISOString()

const TaskActions = ({ categoryId }: TaskActionsProps) => {
   const [newTask, setNewTask] = useState<ITaskRequest>({
      categoryId: categoryId,
      date: todaysISODate,
      isCompleted: false,
      name: ""
   })


   return (
      <Box bg="lightGray" p="4" borderRadius="rounded-5xl">
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
      </Box>
   )
}

export default TaskActions