import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {List, IconButton} from 'react-native-paper';
import PropTypes from 'prop-types';
import {TrackApplicationList} from '../Constatnt/Constant';
import {useNavigation} from '@react-navigation/native';
const statusIcon = status => {
  return (
    <View style={styles.statusContainer}>
      <IconButton
        icon={status === 'Disbursal Complete' ? 'circle' : 'alert'}
        size={9}
        iconColor={status === 'Disbursal Complete' ? '#0B7B69' : 'yellow'}
      />
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );
};
statusIcon.propTypes = {
  status: PropTypes.string.isRequired,
};

const ApplicationList = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <List.Section>
        {TrackApplicationList.map((item, index) => {
          const key = Object.keys(item)[0];
          const applications = item[key];

          return (
            <View key={key} style={styles.sectionContainer}>
              <View style={styles.headerContainer}>
                <IconButton
                  icon={key === 'Approved' ? 'check-circle' : 'close-circle'}
                  size={20}
                  style={styles.icon}
                  iconColor={key === 'Approved' ? '#0B7B69' : '#8C1823'}
                />
                <Text style={styles.subheaderText}>
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, ' ')}
                </Text>
              </View>
              <View style={styles.divider} />
              {applications.map((app, appIndex) => (
                <List.Item
                  key={app.applicationNo}
                  title={app.applicationNo}
                  style={styles.listItem}
                  right={() => statusIcon(app.status)}
                  onPress={() => {
                    navigation.navigate('MyApplication');
                  }}
                />
              ))}
            </View>
          );
        })}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  sectionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    marginBottom: 10,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
  },
  subheaderText: {
    fontSize: 16,
    color: '#1F1B13',
    flex: 1,
  },
  divider: {
    padding: 0,
    margin: 0,
    backgroundColor: '#DDDDDD',
    width: '100%',
    marginBottom: 5,
    height: 1,
  },
  listItem: {
    height: 53,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 10,
    color: '#0B7B69',
  },
});

export default ApplicationList;
