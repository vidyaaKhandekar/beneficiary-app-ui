import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Navbar from '../Component/Navbar';
import CustomProgressBar from '../Component/CustomProgressBar';
import DocumentList from '../Component/DocumentList';
import {documentName} from '../Constatnt/Constant';
import HeadingText from '../Component/HeadingText';
import CustomButton from '../Component/CustomButton';

const Profile = ({navigation}) => {
  const handleOnPress = () => {
    navigation.navigate('Search');
  };
  return (
    <View style={styles.container}>
      <Navbar />
      <HeadingText
        benificiary={true}
        heading={'Anaya Gupta'}
        helperHeading={'Logged In With Digilocker'}
      />
      <CustomProgressBar totalDocuments={6} presentDocuments={6} />
      {/* Scrollable part of the screen */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <DocumentList documents={documentName} />
        <CustomButton
          testId={'click-explore-scholarship'}
          label="Explore Scholarship"
          marginTop={18}
          height={40}
          width={'95%'}
          handleClick={handleOnPress}
        />
      </ScrollView>
    </View>
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
