import * as React from 'react';
import {Avatar, IconButton, Card, Text, Button} from 'react-native-paper';
import {View} from 'react-native';
import Theme from '../Theme/Theme';

const ScholarshipCard = () => (
  <Card>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 0.3}}>
        <Card.Cover
          source={{uri: 'https://picsum.photos/700'}}
          style={{width: 56, height: 56, borderRadius: 10, marginRight: 10}}
        />
      </View>
      <View style={{flex: 0.7, paddingHorizontal:1, paddingVertical: 10}}>
        <Text variant="titleLarge" style={{fontSize: 18, color: 'black'}}>
          Card title
        </Text>
        <Text variant="bodyMedium" style={{fontSize: 18, color: 'black'}}>
          Card content
        </Text>
        <Text variant="titleLarge" style={{fontSize: 18, color: 'black'}}>
          Card title
        </Text>
        <Text variant="bodyMedium" style={{fontSize: 18, color: 'black'}}>
          Card content
        </Text>
      </View>
      <View>
        <Card.Actions>
          <IconButton
            icon="arrow-right-drop-circle"
            size={24}
            onPress={() => console.log('Pressed')}
          />
        </Card.Actions>
      </View>
    </View>
  </Card>
);

export default ScholarshipCard;
