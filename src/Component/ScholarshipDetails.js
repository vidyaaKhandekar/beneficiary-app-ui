import {StyleSheet, View} from 'react-native';
import React from 'react';
import HeadingText from './HeadingText';
import Navbar from './Navbar';
import DetailScreen from './DetailScreen';
import {useNavigation} from '@react-navigation/native';
const ScholarshipDetails = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('ScholarshipListing');
  };
  return (
    <View style={styles.textContainer}>
      <Navbar />
      <HeadingText
        heading={'Pre-Matric Scholarship-ST'}
        back={true}
        handleBack={handleBack}
      />
      <DetailScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});

export default ScholarshipDetails;
