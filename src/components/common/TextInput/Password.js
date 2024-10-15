import React, {useState} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const PasswordInput = ({label, value, onChangeText, ...props}) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      secureTextEntry={showPassword}
      right={
        <TextInput.Icon
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={() => setShowPassword(!showPassword)}
        />
      }
      style={styles.input}
      {...props} // Additional props like keyboardType
    />
  );
};

// Prop validation
PasswordInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default PasswordInput;
