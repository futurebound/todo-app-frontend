import { Box, Text } from '@/utils/theme'
import { StyleSheet, View } from 'react-native'

const Button = () => {
   return (
      <Box bg="primary" p="4" borderRadius="rounded-3xl">
         <Text color="white">Button component</Text>
      </Box>
   )
}

export default Button