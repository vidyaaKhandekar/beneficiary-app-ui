import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ApplicationList from '../../components/ApplicationList';
import SearchHeader from '../../components/common/layout/SearchHeader';
import {useNavigation} from '@react-navigation/native';
import Layout from '../../components/common/layout/Layout';
import {getTokenData} from '../../service/ayncStorage';
import {getApplicationList, getUser} from '../../service/auth';
const BenefitApplication = () => {
  const navigation = useNavigation();
  const [applicationList, setApplicationList] = useState();

  const init = async SearchText => {
    try {
      const {sub} = await getTokenData(); // Assuming sub is the user identifier
      const result = await getUser(sub);

      const user_id = result?.data?.user_id;
      const data = await getApplicationList(SearchText, user_id);
      console.log('application list ', data.data.applications);
      setApplicationList(data.data.applications);
    } catch (error) {
      console.error('Error fetching application list:', error);
    }
  };
  useEffect(() => {
    init();
  }, []);
  console.log('application list ', applicationList);
  return (
    <Layout
      _heading={{
        heading: 'My Applications',
        subHeading: 'Track your application progress',
      }}
      afterHeader={<SearchHeader onSearch={init} />}>
      <ScrollView>
        <ApplicationList applicationList={applicationList} />
      </ScrollView>
    </Layout>
  );
};

export default BenefitApplication;
