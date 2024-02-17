import Category from "@/components/shared/categories/category"
import CreateNewList from "@/components/shared/categories/create-new-list"
import Loader from "@/components/shared/loader"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { fetcher } from "@/services/config"
import { ICategory } from "@/types"
import { Box, Text } from "@/utils/theme"
import { FlatList } from "react-native"
import useSWR from "swr"


const CategoriesScreen = () => {
   const {data, isLoading, error } = useSWR<ICategory[]>("category/getAll", fetcher)
   
   if (isLoading) {
      return <Loader />
   }

   const renderItem = ({ item }: { item: ICategory }) => (
      <Category category={item} />
   )
   
   return (
      <SafeAreaWrapper>
         <Box flex={1} px="4">
            <Text variant="textXl" fontWeight="500" mb="10">
               Categories Screen
            </Text>
            <FlatList 
               data={data} 
               renderItem={renderItem}
               ItemSeparatorComponent={() => <Box height={14}/>}
               showsVerticalScrollIndicator={false}
               keyExtractor={(item) => item._id}
            />
            <CreateNewList />
         </Box>
      </SafeAreaWrapper>
   )
}

export default CategoriesScreen