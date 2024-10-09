import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Navbar from './Navbar';
import HeadingText from './HeadingText';

export default function Layout({isScrollable = true, children, ...props}) {
  if (isScrollable) {
    return (
      <App {...props}>
        <ScrollView style={styles.view}>{children}</ScrollView>
      </App>
    );
  }
  return (
    <View style={styles.view}>
      <App {...props}>{children}</App>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FAFAFA',
  },
});
const App = ({children, _heading}) => {
  return (
    <>
      <Navbar />
      <HeadingText {..._heading} />
      {children}
    </>
  );
};
