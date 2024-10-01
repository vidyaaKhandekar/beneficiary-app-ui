import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import CustomDropdown from '../Component/CustomDropdown';
import CustomButton from '../Component/CustomButton';

const Login = ({setIsLoggedIn}) => {
  //list of languages
  const list = [{label: 'English', value: '1'}];
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../Asset/fastPass1.png')} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Select Preferred Language</Text>
        <CustomButton
          label="Sign In / Sign Up with DigiLocker"
          padding={2}
          width="100%"
          handleClick={handleLogin}
        />
        <CustomDropdown
          testId={'select-language'}
          label="Select Language"
          list={list}
          helperText={'You Can Change It Later'}
        />
      {/* <View style={{height:250}}><Text>This is login</Text></View> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#121943',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#121943',
    height: '40%',
    justifyContent: 'flex-end',
  },
  logo: {marginBottom: 90, width: 240, height: 78},
  inputContainer: {
    height: '60%',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    color: '#4D4639',
    marginBottom: 20,
  },
});
export default Login;
