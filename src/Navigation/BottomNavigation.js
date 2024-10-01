import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  HomeStackScreen,
  ScholarshipListingStackScreen,
  ScholarshipApplicationStackScreen,
}  from './AppNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      activeColor="#3C5FDD"
      inactiveColor="#7A7A7A"
      barStyle={styles.barStyle}
      shifting={false}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={ScholarshipListingStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="feature-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Application"
        component={ScholarshipApplicationStackScreen}
        options={{
          tabBarLabel: 'My Application',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="clipboard-text" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
};
const styles = StyleSheet.create({
    barStyle:{
     backgroundColor:'#FAFAFA',
    },
   });
export default BottomNavigation;
