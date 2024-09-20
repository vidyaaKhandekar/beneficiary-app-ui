import { View } from 'react-native';
import React from 'react';
import Navbar from '../Component/Navbar';
import CustomSearchbar from '../Component/CustomSearchbar';
import HeadingText from '../Component/HeadingText';
import ScholarshipCard from '../Component/ScholarshipCard';

const ScholarshipListing = () => {
  return (
    <View>
      <Navbar/>
      <HeadingText heading={'Browse Scholarship'}/>
      <ScholarshipCard/>
       <CustomSearchbar/>
    </View>
  );
};
export default ScholarshipListing;
