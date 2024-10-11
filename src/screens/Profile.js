import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import DocumentList from '../components/DocumentList';
import {documentName} from '../constatnt/Constant';
import CustomButton from '../components/common/button/Button';
import {useNavigation} from '@react-navigation/native';
import Layout from '../components/common/layout/Layout';
const Profile = () => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate('Search');
  };
  return (
    <Layout
      _heading={{
        benificiary: true,
        heading: 'Anaya Gupta',
        subHeading: 'Logged in with Digilocker',
      }}>
      {/* <CustomProgressBar totalDocuments={6} presentDocuments={6} /> */}
      {/* Scrollable part of the screen */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <DocumentList documents={documentName} />
        <CustomButton
          testId={'click-explore-scholarship'}
          label="Explore Benefits"
          marginTop={18}
          height={40}
          width={'95%'}
          handleClick={handleOnPress}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full height of the screen
    backgroundColor: '#FAFAFA',
  },
  scrollContainer: {},
});

export default Profile;
