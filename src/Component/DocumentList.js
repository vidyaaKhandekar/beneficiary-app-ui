import * as React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet } from 'react-native';
const DocumentList = ({ documents }) => (
  <>
    {documents.map((document, index) => (
        <>
      <List.Item
        key={index} // Use a unique key for each item
        title={document.documentName} // Assuming document has a documentName property
        description={document.description} // Assuming document has a description property
        style={styles.listItem} // Apply styles here
        left={props => (
          <List.Icon 
            {...props} 
            icon={document.Status === true ? 'check-circle' : 'alert-circle'} // Change icon based on status
            color={document.Status === true ? '#0B7B69' : '#EDA145'} 
          />
        
        )}
      />
       {/* Add a divider for bottom border */}
   
     </>
    ))}
  </>
);
const styles = StyleSheet.create({
    listItem: {
      height: 61, // Set your desired height
      borderBottomWidth: 1, // Add bottom border width
    borderBottomColor: '#D0C5B4', 
    
    },
    
  });
export default DocumentList;
