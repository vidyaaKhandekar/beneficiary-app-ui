import * as React from 'react';
import {Avatar, IconButton, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

const LeftContent = props => (
  <Avatar.Icon {...props} icon="account" size={50} style={styles.avatar} />
);

const HeadingText = ({
  benificiary,
  icon,
  heading,
  helperHeading,
  back,
  handleBack,
}) => (
  <View style={styles.titleContainer}>
    {benificiary ? <LeftContent /> : null}

    <View style={styles.textContainer}>
      <View style={styles.header}>
        {back ? (
          <IconButton
            icon={'arrow-left'}
            iconColor="#4D4639"
            onPress={handleBack}
            size={30}
            style={styles.iconButton}
          />
        ) : null}
        <Text style={styles.title}>{heading}</Text>
      </View>
      {helperHeading ? (
        <Text style={styles.subtitle}>{helperHeading}</Text>
      ) : null}
    </View>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#FAFAFA',
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
    margin: 0,
    padding: 0,
  },
});

export default HeadingText;
