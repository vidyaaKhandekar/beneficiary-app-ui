import {
  HomeStackScreen,
  BenefitApplicationStackScreen,
  BenefitsListingStackScreen,
} from '../AppNavigator';

export default [
  {
    name: 'Home',
    component: HomeStackScreen,
    options: {tabBarLabel: 'Profile'},
  },
  {
    name: 'Search',
    component: BenefitsListingStackScreen,
    options: {tabBarLabel: 'Search'},
  },
  {
    name: 'My Application',
    component: BenefitApplicationStackScreen,
    options: {tabBarLabel: 'My Application'},
  },
];
