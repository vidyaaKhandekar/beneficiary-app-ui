import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import authRoutes from './routes/authRoutes';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const [routes, setRoutes] = React.useState([]);

  React.useEffect(() => {
    setRoutes([...authRoutes] as typeof routes);
  }, []);

  const getTabBarIcon = ({
    route,
    color,
  }: {
    route: {name: string};
    color: string;
  }): JSX.Element => {
    let iconName: string | undefined;

    switch (route?.name) {
      case 'Profile':
        iconName = 'home';
        break;
      case 'Search':
        iconName = 'feature-search';
        break;
      case 'My Application':
        iconName = 'clipboard-text';
        break;
      default:
        break;
    }

    return iconName ? (
      <MaterialCommunityIcons name={iconName} color={color} size={24} />
    ) : (
      <></>
    );
  };

  if (!routes?.length) {
    return <Text>Loading ...</Text>;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: prop => getTabBarIcon({...prop, route}),
          tabBarActiveTintColor: '#3C5FDD',
          tabBarInactiveTintColor: '#7A7A7A',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarStyle: styles.barStyle,
          headerShown: false,
        })}>
        {routes?.map((route: (typeof authRoutes)[number]) => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{tabBarLabel: route.name}}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#FAFAFA',
    paddingBottom: 8,
    height: 60,
  },
  tabBarLabelStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
});
