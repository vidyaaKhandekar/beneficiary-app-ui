import * as React from 'react';
import { View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Theme from '../Theme/Theme';
const CustomProgressBar = ({ totalDocuments, presentDocuments}) =>{
  const progress = totalDocuments > 0 ? presentDocuments / totalDocuments : 0;
  const theme = Theme();
  return (

  <View
    style={theme.progressBarStyle}
  >
    <ProgressBar
      progress={progress}
      color={theme.progressBarStyle.progressBarColor.primaryColor}
      style={theme.progressBarStyle.progressBar} // To ensure the progress bar has rounded corners
    />
  </View>
);
};
export default CustomProgressBar;
