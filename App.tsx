import Navigation from '@/navigation';
import theme from '@/utils/theme';
import { ThemeProvider } from '@shopify/restyle';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
