import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import HeadingText from '../../components/common/layout/HeadingText';
import CustomButton from '../../components/common/button/Button';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/common/TextInput/TextInput';
import Password from '../../components/common/TextInput/Password';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Register = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Login');
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    // Clear error after 3 seconds
    const clearError = () => {
      setTimeout(() => {
        setError('');
      }, 3000); // 3 seconds timeout
    };

    if (!firstName || !lastName || !password || !confirmPassword) {
      setError('Enter all fields');
      clearError();
      return;
    }
    if (password === confirmPassword) {
      setError('Passwords not match');
      clearError();
      return;
    }

    // If everything is fine, navigate to the next screen
    setError('');
  };
  return (
    <View style={{backgroundColor: '#FAFAFA', height: '100%'}}>
      <HeadingText handleBack={handleBack} />
      <Text style={styles.text}>Sign Up !</Text>
      <View>
        <CustomTextInput
          label={'Enter First Name'}
          value={firstName}
          onChangeText={setFirstName}
        />
        <CustomTextInput
          label={'Enter Last Name'}
          value={lastName}
          onChangeText={setLastName}
        />
        <Password
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Password
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {error && (
          <View style={styles.errorContainer}>
            <MaterialCommunityIcons
              name="alert-circle"
              size={20}
              color="#8C1823"
            />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        <CustomButton
          label="Sign Up"
          marginTop={50}
          width="90%"
          handleClick={handleLogin}
        />
      </View>
      <Text style={styles.signUpText}>Do have account</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{alignSelf: 'center'}}>
        <Text style={styles.signUpButton}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 30,
    backgroundColor: '#FAFAFA',
    fontSize: 16,
    paddingLeft: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: '#8C1823', // Error color
    textAlign: 'center',
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
    marginTop: 3,
  },
  signUpText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginTop: 60,
    textAlign: 'center',
  },
  signUpButton: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#3C5FDD',
  },
});

export default Register;
