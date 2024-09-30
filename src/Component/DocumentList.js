import * as React from 'react';
import {List} from 'react-native-paper';
import {StyleSheet,View} from 'react-native';
import 'react-native-get-random-values'; // Polyfill for crypto.getRandomValues()
import { v4 as uuidv4 } from 'uuid';

const DocumentList = ({documents}) => (
  < View style={styles.container}>
    {documents.map((document) => (
      <React.Fragment key={uuidv4()} >
        <List.Item
          title={document.documentName} // Assuming document has a documentName property
          description={document.description} // Assuming document has a description property
          style={styles.listItem} // Apply styles here
          titleStyle={styles.title} // Custom title font styles
          descriptionStyle={styles.description} // Custom description font styles
          left={props => (
            <List.Icon
              {...props}
              icon={document.Status === true ? 'check-circle' : 'alert-circle'} // Change icon based on status
              color={document.Status === true ? '#0B7B69' : '#EDA145'} // Use your theme colors
            />
          )}
        />
      </React.Fragment>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    backgroundColor:'#FAFAFA',
  },
  listItem: {
    height: 61, // Set your desired height
    borderBottomWidth: 1, // Add bottom border width
    borderBottomColor: '#DDDDDD',
  },
  title: {
    fontFamily: 'Poppins-Regular', // Custom font family for the title
    fontSize: 14, // Set desired font size
    fontWeight: '400', // Set font weight
    color: '#1F1B13', // Set text color (black in this case)
  },
});

export default DocumentList;
