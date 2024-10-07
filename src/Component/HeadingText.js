import * as React from 'react';
import {Avatar, Text} from 'react-native-paper';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
const LeftContent = props => (
  <Avatar.Icon {...props} icon="account" size={50} style={styles.avatar} />
);
const BackIcon = ({onPress, iconSize = 24}) => {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      <Icon name={'arrow-back'} size={iconSize} color={'#433E3F'} />
    </TouchableOpacity>
  );
};
const HeadingText = ({
  benificiary,
  heading,
  helperHeading,
  back,
  handleBack,
}) => (
  <View style={styles.titleContainer}>
    {benificiary ? <LeftContent /> : null}

    <View style={styles.textContainer}>
      <View style={styles.header}>
        {back ? <BackIcon onPress={handleBack} /> : null}
        <Text style={styles.title}>{heading}</Text>
      </View>
      {helperHeading ? (
        <Text style={styles.subtitle}>{helperHeading}</Text>
      ) : null}
    </View>
  </View>
);

HeadingText.propTypes = {
  benificiary: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  helperHeading: PropTypes.string,
  back: PropTypes.bool,
  handleBack: PropTypes.func,
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    textAlign: 'left',
    color: '#4D4639',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.5,
    textAlign: 'left',
    paddingTop: 9,
    color: '#4D4639',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
  },
  avatar: {
    marginRight: 19,
  },
  iconButton: {
    marginRight: 10,
    padding: 0,
  },
});

export default HeadingText;
