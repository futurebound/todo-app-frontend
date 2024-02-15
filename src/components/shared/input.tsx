
import theme, { Box, Text } from "@/utils/theme"
import { TextInput, TextInputProps } from "react-native"

type InputProps = {
   label: string
   placeholder: string
   error?: undefined
} & TextInputProps

const Input = ({ label, placeholder, error }: InputProps) => {
   return (
      <Box flexDirection="column" mb="6">
         <Text variant="textXs" mb="3">
            {label}
         </Text>
         <TextInput 
            style={{
               paddingVertical: 16,
               borderWidth: 1,
               borderColor: theme.colors.gray650,
               borderRadius: theme.borderRadii["rounded-7xl"]
            }}
            placeholder={placeholder}
         />
      </Box>
   )
}

export default Input