import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Navbar from '../Component/Navbar';
import CustomProgressBar from '../Component/CustomProgressBar';
import DocumentList from '../Component/DocumentList';
import { documentName } from '../Constatnt/Constant';
import HeadingText from '../Component/HeadingText';
import CustomButton from '../Component/CustomButton';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <HeadingText benificiary={true} heading={'Vidya Khandekar'} helperHeading={'Logged In With Digilocker'} />
      <CustomProgressBar totalDocuments={10} presentDocuments={9} />
      {/* Scrollable part of the screen */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <DocumentList documents={documentName} />
        <CustomButton label="Explore Scholarship" marginTop={18} height={50} width={'95%'} padding={5}/>
        <CustomButton label="Upload Missing Documents" marginTop={8} height={50} width={'95%'} padding={5}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full height of the screen
  },
  scrollContainer: {
    paddingHorizontal: 16, // Optional padding
    paddingBottom: 50, // Extra space at the bottom for scrolling
  },
});

export default Profile;
