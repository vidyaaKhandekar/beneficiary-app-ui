import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackScreen,
  ScholarshipListingStackScreen,
  ScholarshipApplicationStackScreen,
} from './src/Navigation/AppNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'feature-search';
            } else if (route.name === 'My Application') {
              iconName = 'clipboard-text';
            }
            return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
          },
          tabBarActiveTintColor: '#3C5FDD', // Active color
          tabBarInactiveTintColor: '#7A7A7A', // Inactive color
          tabBarLabelStyle: styles.tabBarLabelStyle, // Apply custom label style
          tabBarStyle: styles.barStyle,
          headerShown:false
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ tabBarLabel: 'Profile' }}
        />
        <Tab.Screen
          name="Search"
          component={ScholarshipListingStackScreen}
          options={{ tabBarLabel: 'Search' }}
        />
        <Tab.Screen
          name="My Application"
          component={ScholarshipApplicationStackScreen}
          options={{ tabBarLabel: 'My Application' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#FAFAFA',
    paddingBottom:8,
    height:60,
  },
  tabBarLabelStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
});
