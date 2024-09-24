import * as React from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';
const CustomButton = ({
  label = 'Click me',
  variant = 'contained',
  height = 50,
  width = 'maxWidth',
  borderRadius = 30,
  handleClick,
  marginTop = 0,
  padding=0,
}) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Button
    mode={variant}
    onPress={handleClick}
   
    style={{
      height,
      width,
      borderRadius,
      marginTop,
      padding,

    }}
  >
 {label}
  </Button>
  </View>
);

export default CustomButton;
