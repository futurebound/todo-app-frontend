import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { fetcher } from "@/services/config"
import { Box, Text } from "@/utils/theme"
import useSWR from "swr"

const HomeScreen = () => {
   // will append the "category" route onto the URL from fetcher
   //    so this rebuids our [.../PORT/category] URL to make requests
   //    to backend
   const { data, isLoading } = useSWR("category/getAll", fetcher)
   console.log(`data`, JSON.stringify(data, null, 2))

   return (
      <SafeAreaWrapper>
         <Box>
            <Text>Home Screen</Text>
         </Box>
      </SafeAreaWrapper>
   )
}

export default HomeScreen