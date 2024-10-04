import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomButton from '../Component/CustomButton';
import PropTypes from 'prop-types';
import DropdownComponent from '../Component/DropdownComponent';
import {EducationLevel} from '../Constatnt/Constant';
const Login = ({setIsLoggedIn}) => {
  // Dynamic list for language selection; expand as needed
  const languageOptions = [{label: 'English', value: '1'}];

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
        <DropdownComponent
          DropdownLabel="Select Language"
          Data={languageOptions}
        />
        <CustomButton
          label="Sign In / Sign Up with DigiLocker"
          padding={2}
          width="92%"
          handleClick={handleLogin}
          accessibilityLabel="Sign In or Sign Up with DigiLocker"
        />
        <View style={{height: 220}} />
      </View>
    </View>
  );
};

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
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
  logo: {
    marginBottom: 90,
    width: 240,
    height: 78,
  },
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
