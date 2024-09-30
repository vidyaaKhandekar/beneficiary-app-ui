import {View, StyleSheet} from 'react-native';
import React from 'react';
import Navbar from '../Component/Navbar';
import HeadingText from '../Component/HeadingText';
import ScholarshipCard from '../Component/ScholarshipCard';

import SearchHeader from '../Component/SearchHeader';

const ScholarshipListing = ({navigation}) => {
  return (
    <View style={styles.textContainer}>
      <Navbar />
      <HeadingText heading={'Browse Scholarship'} />
      <SearchHeader />
      <ScholarshipCard navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
export default ScholarshipListing;
