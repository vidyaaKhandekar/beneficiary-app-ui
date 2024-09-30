import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
const CustomProgressBar = ({ totalDocuments, presentDocuments}) =>{
  const progress = totalDocuments > 0 ? presentDocuments / totalDocuments : 0;

  return (

  <View
    style={styles.progressBarStyle}
  >
    <ProgressBar
      progress={progress}
      color={styles.progressBarStyle.progressBarColor.primaryColor}
      style={styles.progressBarStyle.progressBar} // To ensure the progress bar has rounded corners
    />
  </View>
);
};
const styles = StyleSheet.create({
  progressBarStyle: {
    width: '90%',
    height: 5,
    left: 15,
    borderRadius: 10,
    overflow: 'hidden',
    progressBarColor: {
      primaryColor: '#0B7B69',
    },
    progressBar: {
      borderRadius: 10,
      backgroundColor: '#CC7914',
    },
  },
});
export default CustomProgressBar;
