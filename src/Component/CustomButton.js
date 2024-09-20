import * as React from 'react';
import { Button } from 'react-native-paper';

const CustomButton = ({
  label = 'Click me',
  variant = 'contained',
  height = 40,
  width = 'maxWidth',
  borderRadius = 30,
  handleClick,
}) => (
  <Button
    mode={variant}
    onPress={handleClick}
    style={{
      height,
      width,
      borderRadius,
    }}
  >
 {label}
  </Button>
);

export default CustomButton;
