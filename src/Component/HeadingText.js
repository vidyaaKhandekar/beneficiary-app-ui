import React from 'react';
import { Text, View } from 'react-native';

const HeadingText = ({heading,helperHeading}) => {
  return (
    <View style={{
      height: 68,
      padding: 12,
      paddingBottom: 16,
      gap: 0,
    }}>
      <Text style={{
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 28,
        textAlign: 'left',
        height:28,
        color:' #4D4639',
      }}>
         {heading}
      </Text>
    </View>
  );
};

export default HeadingText;
