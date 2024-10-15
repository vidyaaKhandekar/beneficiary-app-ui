import * as React from 'react';
import {List, ActivityIndicator} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const LeftIcon = (props, Status = true) => {
  return (
    <List.Icon
      {...props}
      icon={Status === true ? 'check-circle' : 'alert-circle'}
      color={Status === true ? '#0B7B69' : '#EDA145'}
    />
  );
};
const DocumentList = ({documents}) =>
  documents ? (
    <View style={styles.container}>
      {documents?.map(document => (
        <React.Fragment key={document?.name}>
          <List.Item
            title={document?.name}
            description={document?.description}
            style={styles.listItem}
            titleStyle={styles.title}
            descriptionStyle={styles.description}
            left={props => LeftIcon(props)}
          />
        </React.Fragment>
      ))}
    </View>
  ) : (
    <ActivityIndicator />
  );

// Add propTypes validation
DocumentList.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string,
    }),
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    height: 61,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    justifyContent: 'center',
    paddingLeft: 12,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#1F1B13',
    paddingLeft: 8,
  },
  description: {
    fontFamily: 'Poppins-Regular',
  },
});

export default DocumentList;
