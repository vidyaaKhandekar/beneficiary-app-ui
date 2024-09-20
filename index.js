/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3C5FDD',
      secondary: 'yellow',
    },
    
  };
export default function Main() {
    return (
        <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
      </SafeAreaProvider>
    );
  }
  
  AppRegistry.registerComponent(appName, () => Main);
