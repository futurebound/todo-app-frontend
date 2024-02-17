import { ICategory } from "@/types"
import { Box, Text } from "@/utils/theme"

type CategoryProps = {
   category: ICategory
}

const Category = ({ category }: CategoryProps) => {
   return (
      <Box bg="lightGray" p="4" borderRadius="rounded-5xl">
         <Box flexDirection="row">
            <Text variant="textBase" fontWeight="400" mr="3">{category.icon.symbol}</Text>
            <Text variant="textBase" fontWeight="400">{category.name}</Text>
         </Box>
      </Box>
   )
}

export default Category