import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthScreenStackScreen} from '../AppNavigator';
// import {createStackNavigator} from '@react-navigation/stack';

export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <AuthScreenStackScreen />
    </NavigationContainer>
  );
}
