import { View } from 'react-native';
import React from 'react';
import Navbar from '../Component/Navbar';
import HeadingText from '../Component/HeadingText';
import CustomSearchbar from '../Component/CustomSearchbar';

const ScholarshipApplication = () => {
  return (
    <View>
      <Navbar/>
     <HeadingText heading={'My Application'} helperHeading={'Track Your Application Progress'} />
     <CustomSearchbar/>
    </View>
  );
};
export default ScholarshipApplication;

