import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types'; // Import PropTypes
import Navbar from './Navbar';
import HeadingText from './HeadingText';

export default function Layout({isScrollable = true, children, ...props}) {
  if (isScrollable) {
    return (
      <App {...props}>
        <View style={styles.view}>{children}</View>
      </App>
    );
  }
  return (
    <View style={styles.view}>
      <App {...props}>{children}</App>
    </View>
  );
}

Layout.propTypes = {
  isScrollable: PropTypes.bool, // Expecting a boolean for isScrollable
  children: PropTypes.node, // Expecting React elements as children
};

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

App.propTypes = {
  children: PropTypes.node, // Expecting React elements as children
  _heading: PropTypes.object, // Expecting an object for _heading props
};

App.defaultProps = {
  _heading: {}, // Set default value for _heading
};
