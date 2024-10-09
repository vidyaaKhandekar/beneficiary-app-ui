import React from 'react';
import {Appbar} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Navbar = () => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Home');
  };
  return (
    <Appbar.Header style={styles.appBarTheme}>
      <Appbar.Action icon="menu" onPress={handleNavigate} />
      <Appbar.Content title="Fast Pass" titleStyle={styles.titleStyle} />
      {/* Language  on the right side */}
      <View style={styles.view}>
        <Text style={styles.text}>EN</Text>
        {/* <MaterialCommunityIcons
          name="chevron-down"
          size={15}
          color={'#4D4639'}
          style={styles.icon}
        /> */}
      </View>
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  appBarTheme: {
    marginTop: '24px',
    marginLeft: '12px',
    backgroundColor: '#FAFAFA',
  },
  titleStyle: {
    fontFamily: 'Poppins-LightItalic',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    textAlign: 'left',
    color: '#0A0A0B',
  },
  view: {
    height: 26,
    width: 58,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4D4639',
    flexDirection: 'row',
    paddingTop: 4,
  },
  text: {
    fontSize: 12,
    marginLeft: 20,
    color: '#4D4639',
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 1,
  },
});
export default Navbar;
