// CustomTextInput.js
import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  margin = 10,
  ...rest
}) => {
  const styles = StyleSheet.create({
    input: {
      margin: margin,
      height: 50,
      width: '90%',
      alignSelf: 'center',
      backgroundColor: '#FFFFFF',
    },
  });
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      {...rest}
    />
  );
};

export default CustomTextInput;
