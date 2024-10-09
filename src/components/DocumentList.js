import * as React from 'react';
import {List} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const LeftIcon = (props, Status) => {
  return (
    <List.Icon
      {...props}
      icon={Status === true ? 'check-circle' : 'alert-circle'}
      color={Status === true ? '#0B7B69' : '#EDA145'}
    />
  );
};
const DocumentList = ({documents}) => (
  <View style={styles.container}>
    {documents.map(document => (
      <React.Fragment key={document?.documentName}>
        <List.Item
          title={document?.documentName}
          description={document?.description}
          style={styles.listItem}
          titleStyle={styles.title}
          descriptionStyle={styles.description}
          left={props => LeftIcon(props, document.Status)}
        />
      </React.Fragment>
    ))}
  </View>
);

// Add propTypes validation
DocumentList.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.shape({
      documentName: PropTypes.string.isRequired,
      description: PropTypes.string,
      Status: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FAFAFA',
  },
  listItem: {
    height: 61,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#1F1B13',
  },
});

export default DocumentList;
