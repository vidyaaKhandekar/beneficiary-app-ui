import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ApplicationList from '../../components/ApplicationList';
import SearchHeader from '../../components/common/layout/SearchHeader';
import {useNavigation} from '@react-navigation/native';
import Layout from '../../components/common/layout/Layout';
const BenefitApplication = () => {
  const navigation = useNavigation();
  return (
    <Layout
      _heading={{
        heading: 'My Applications',
        subHeading: 'Track your application progress',
      }}>
      <SearchHeader />
      <ScrollView>
        <ApplicationList navigation={navigation} />
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
});
export default BenefitApplication;
