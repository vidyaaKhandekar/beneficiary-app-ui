import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import List from '../screens/benefits/List';
import BenefitDetails from '../screens/benefits/ViewDetails';
import Application from '../screens/benefits/Application';
import MyApplication from '../screens/benefits/MyApplication';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="BenefitsListing" component={List} />
    </HomeStack.Navigator>
  );
}
const BenefitsListingStack = createNativeStackNavigator();

export function BenefitsListingStackScreen() {
  return (
    <BenefitsListingStack.Navigator screenOptions={{headerShown: false}}>
      <BenefitsListingStack.Screen name="BenefitsListing" component={List} />
      <BenefitsListingStack.Screen
        name="BenefitDetails"
        component={BenefitDetails}
      />
    </BenefitsListingStack.Navigator>
  );
}

const BenefitApplicationStack = createNativeStackNavigator();

export function BenefitApplicationStackScreen() {
  return (
    <BenefitsListingStack.Navigator screenOptions={{headerShown: false}}>
      <BenefitApplicationStack.Screen
        name="BenefitApplication"
        component={Application}
      />
      <BenefitApplicationStack.Screen
        name="MyApplication"
        component={MyApplication}
      />
    </BenefitsListingStack.Navigator>
  );
}
