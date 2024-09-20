import React from 'react';
import { Appbar } from 'react-native-paper';
import Theme from '../Theme/Theme';

const Navbar = () => {
  const theme = Theme();

  return (
    <Appbar.Header style={theme.appBarTheme}>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content
        title="FAST PASS"
        titleStyle={{
          fontFamily: theme.fonts.regular.fontFamily,
          fontSize: theme.fonts.regular.fontSize,
          fontStyle: theme.fonts.regular.fontStyle,
          fontWeight: theme.fonts.regular.fontWeight,
          lineHeight: theme.fonts.regular.lineHeight,
          textAlign: theme.fonts.regular.textAlign,
        }}
      />
      {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
      {/* add dropdown select */}
    </Appbar.Header>
  );
};

export default Navbar;
