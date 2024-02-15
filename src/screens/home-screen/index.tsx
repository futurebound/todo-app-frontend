import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"


const HomeScreen = () => {

   return (
      <SafeAreaWrapper>
         <Box>
            <Text>Home Screen</Text>
         </Box>
      </SafeAreaWrapper>
   )
}

export default HomeScreen