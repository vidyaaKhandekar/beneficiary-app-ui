import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import ScholarshipApplication from '../Screens/ScholarshipApplication';
import ScholarshipListing from '../Screens/ScholarshipListing';
import Profile from '../Screens/Profile';

const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
      icon: 'home',
    },
    {
      key: 'search',
      title: 'Search',
      focusedIcon: 'feature-search',
      unfocusedIcon: 'feature-search-outline',
      icon:'feature-search',
    },
    {
      key: 'myapplication',
      title: 'My Apllication',
      focusedIcon: 'clipboard-text',
      unfocusedIcon: 'clipboard-text-outline',
      icon: 'clipboard-text',
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: Profile,
    search: ScholarshipListing,
    myapplication: ScholarshipApplication,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#3C5FDD" // Active icon & text color
      inactiveColor="#45464F" // Inactive icon & text color
      labeled={true} // Show the label with the icon
      labelStyle={styles.label} // Custom label style
      style={styles.bottomNavigation}
    />
  );
};
const styles = StyleSheet.create({
  bottomNavigation: {
    width: '100%',
  },
  label: {
    fontSize: 40, // Font size for label
    fontWeight: 300, // Bold label text
  },

});
export default BottomNavigator;
