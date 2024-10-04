import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Navbar from '../Component/Navbar';
import HeadingText from '../Component/HeadingText';
import ApplicationList from '../Component/ApplicationList';
import SearchHeader from '../Component/SearchHeader';
import {useNavigation} from '@react-navigation/native';
const ScholarshipApplication = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.view}>
      <Navbar />
      <HeadingText
        heading={'My Application'}
        helperHeading={'Track Your Application Progress'}
      />
      <SearchHeader />
      <ApplicationList navigation={navigation} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FAFAFA',
    height: '100%',
  },
});
export default ScholarshipApplication;
