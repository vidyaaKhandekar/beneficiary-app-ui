import * as React from 'react';
import { Avatar, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="account" size={50} style={{marginRight:19}} />;

const HeadingText = ({benificiary,icon,heading,helperHeading}) => (
    <View style={styles.titleContainer}>
      {benificiary ? <LeftContent /> : null}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{heading}</Text>
        {helperHeading ? <Text style={styles.subtitle}>{helperHeading}</Text> : null}
      </View>
    </View>

);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    textAlign: 'left',
    color:'#4D4639',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.5,
    textAlign: 'left',
    paddingTop:9,
    color:'#4D4639',
  },
});

export default HeadingText;
