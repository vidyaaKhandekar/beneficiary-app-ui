import {
  HomeStackScreen,
  ScholarshipApplicationStackScreen,
  ScholarshipListingStackScreen,
} from '../AppNavigator';

export default [
  {
    name: 'Profile',
    component: HomeStackScreen,
    options: {tabBarLabel: 'Profile'},
  },
  {
    name: 'Search',
    component: ScholarshipListingStackScreen,
    options: {tabBarLabel: 'Search'},
  },
  {
    name: 'My Application',
    component: ScholarshipApplicationStackScreen,
    options: {tabBarLabel: 'My Application'},
  },
];
