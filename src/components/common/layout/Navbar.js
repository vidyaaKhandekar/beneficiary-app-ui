import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Dropdown from '../inputs/Dropdown';
const Navbar = () => {
  const navigation = useNavigation();
  const languageOptions = [{label: 'EN', value: '1'}];
  const handleNavigate = () => {
    navigation.navigate('Home');
  };
  return (
    <Appbar.Header style={styles.appBarTheme}>
      <Appbar.Action icon="menu" onPress={handleNavigate} iconColor="#000000" />
      <Appbar.Content title="Fast Pass" titleStyle={styles.titleStyle} />
      {/* Language  on the right side */}
      <Dropdown
        placeholderLabel="EN"
        Data={languageOptions}
        isRenderLabel={false}
        height={25.5}
        DropdownLabel="EN"
        borderRadius={8}
        width={60}
        fontSize={12}
        iconSize={18}
        marginLeft={4}
        borderColor="#4D4639"
        padding={0}
      />
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
    fontFamily: 'Poppins-Italic',
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 20,
    textAlign: 'left',
    color: '#0A0A0B',
  },
  view: {
    height: 22,
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
