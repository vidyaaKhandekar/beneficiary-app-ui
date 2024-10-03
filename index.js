/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const fontConfig = {
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  medium: {
    fontFamily: 'Poppins-Bold',
  },
  light: {
    fontFamily: 'Poppins-Light',
  },
  thin: {
    fontFamily: 'Poppins-Thin',
  },
  // Title variants
  titleLarge: {
    fontFamily: 'Poppins-Bold',
  },
  titleMedium: {
    fontFamily: 'Poppins-Medium',
  },
  titleSmall: {
    fontFamily: 'Poppins-Medium',
  },
  // Label variants
  labelLarge: {
    fontFamily: 'Poppins-Regular',

    labelMedium: {
      fontFamily: 'Poppins-Regular',
    },
    labelSmall: {
      fontFamily: 'Poppins-Regular',
    },
    // Body variants
    bodyLarge: {
      fontFamily: 'Poppins-Regular',
    },
    bodyMedium: {
      fontFamily: 'Poppins-Regular',
    },
    bodySmall: {
      fontFamily: 'Poppins-Regular',
    },
    // Display variants
    displayLarge: {
      fontFamily: 'Poppins-Light',
    },
    displayMedium: {
      fontFamily: 'Poppins-Light',
    },
    displaySmall: {
      fontFamily: 'Poppins-Light',
    },
    // Headline variants
    headlineLarge: {
      fontFamily: 'Poppins-Regular',
    },
    headlineMedium: {
      fontFamily: 'Poppins-Regular',
    },
    headlineSmall: {
      fontFamily: 'Poppins-Regular',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3C5FDD',
  },
  fonts: configureFonts({config: fontConfig}),
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
