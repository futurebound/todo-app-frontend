import Loader from "@/components/shared/loader"
import NavigateBack from "@/components/shared/navigate-back"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import TaskActions from "@/components/shared/tasks/task-actions"
import { CategoriesStackParamList } from "@/navigation/types"
import { fetcher } from "@/services/config"
import { ICategory, ITask } from "@/types"
import { Box, Text } from "@/utils/theme"
import { RouteProp, useRoute } from "@react-navigation/native"
import { FlatList } from "react-native"
import useSWR from "swr"


type CategoryScreenRouteProp = RouteProp<CategoriesStackParamList, "Category">

const CategoryScreen = () => {
   const route = useRoute<CategoryScreenRouteProp>()
   const { id } = route.params

   // load in category and associated tasks
   //    TODO: probably a more effective way and to make additional network calls
   //          - explore passing as state? other methods?
   const {data: category, isLoading: isLoadingCategory } = useSWR<ICategory>(
      `category/get/${id}`, fetcher)
   const { data : tasks, isLoading: isLoadingTasks, mutate: mutateTasks } = useSWR<ITask[]>(
      `task/getAllByCategory/${id}`, fetcher)


   if (isLoadingTasks || isLoadingCategory || !category || !tasks) {
      return <Loader />
   }

   return (
      <SafeAreaWrapper>
      <Box flex={1} mx="4">
         <Box width={40}>
            <NavigateBack />
         </Box>

         <Box height={16} />
         <Box flexDirection="row">
            <Text variant="textXl" fontWeight="700">{category.icon.symbol}</Text>
            <Text
               variant="textXl"
               fontWeight="700"
               ml="3"
               style={{
               color: category.color.code,
               }}
            >
               {category.name}
            </Text>
         </Box>

         <Box height={16} />
         <TaskActions categoryId={id} />

         <Box height={16} />
         {/* <FlatList
            data={tasks}
            renderItem={({ item, index }) => {
               return <Task task={item} mutateTasks={mutateTasks} />
            }}
            ItemSeparatorComponent={() => <Box height={14} />}
         /> */}
         </Box>
    </SafeAreaWrapper>
   )
}

export default CategoryScreen