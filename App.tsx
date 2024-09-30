import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  HomeStackScreen,
  ScholarshipListingStackScreen,
  ScholarshipApplicationStackScreen,
} from './src/Navigation/AppNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#3C5FDD" // Primary color for focused icons
        inactiveColor="#7A7A7A" // Color for unfocused icons
        barStyle={styles.barStyle} // Background color of the bottom tab bar
        shifting={false} // Disable shifting, removes the background effect
        sceneAnimationEnabled={false} // Disable animation when switching between tabs
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

}

const styles = StyleSheet.create({
 barStyle:{
  backgroundColor:'#FAFAFA',
 },
});
