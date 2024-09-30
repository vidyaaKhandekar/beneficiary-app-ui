import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Screens/Profile';
import ScholarshipListing from '../Screens/ScholarshipListing';
import ScholarshipDetails from '../Component/ScholarshipDetails';
import ScholarshipApplication from '../Screens/ScholarshipApplication';

import MyApplication from '../Component/MyApplication';


const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator  screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Profile} />
      <HomeStack.Screen name="ScholarshipListing" component={ScholarshipListing} />
    </HomeStack.Navigator>
  );
}
const ScholarshipListingStack = createNativeStackNavigator();

export function ScholarshipListingStackScreen() {
  return (
    <ScholarshipListingStack.Navigator  screenOptions={{ headerShown: false }}>
        <ScholarshipListingStack.Screen name="ScholarshipListing" component={ScholarshipListing} />
        <ScholarshipListingStack.Screen name="ScholarshipDetails" component={ScholarshipDetails} />
    </ScholarshipListingStack.Navigator>
  );
}

const ScholarshipApplicationStack = createNativeStackNavigator();

export function ScholarshipApplicationStackScreen() {
  return (
    <ScholarshipListingStack.Navigator  screenOptions={{ headerShown: false }}>
        <ScholarshipApplicationStack.Screen name="ScholarshipApplication" component={ScholarshipApplication} />
        <ScholarshipApplicationStack.Screen name="MyApplication" component={MyApplication} />
    </ScholarshipListingStack.Navigator>
  );
}
