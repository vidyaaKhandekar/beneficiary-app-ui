import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
const Upload = ({fileLimit = 2}) => {
  // File limit passed as a prop, default to 2 files
  const [fileResponses, setFileResponses] = useState([]); // Array to store selected files

  // Function to handle file selection
  const handleDocumentSelection = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // Add selected file to the array, allowing only up to fileLimit
      if (fileResponses.length < fileLimit) {
        setFileResponses([...fileResponses, result[0]]);
      } else {
        Alert.alert(
          'Limit Reached',
          `You can only select up to ${fileLimit} files.`,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the document picker');
      } else {
        console.log('Unknown Error: ', err);
      }
    }
  };

  // Function to clear a specific file (based on index)
  const clearFile = index => {
    const updatedFileResponses = fileResponses.filter((_, i) => i !== index);
    setFileResponses(updatedFileResponses);
  };

  return (
    <View style={styles.uploadContainer}>
      {/* Display selected files and remove icons */}
      {fileResponses.length > 0 && (
        <View style={styles.uplodedFiles}>
          {fileResponses.map((file, index) => (
            <View key={index} style={styles.fileRow}>
              <Text style={styles.fileName}>{` ${file.name}`}</Text>
              <IconButton
                icon="close"
                color="#CC7914" // Error color for removing the file
                size={24}
                onPress={() => clearFile(index)} // Remove the specific file
                style={styles.removeButton}
              />
            </View>
          ))}
        </View>
      )}

      {/* Button to upload a file */}
      <Button
        mode="text"
        onPress={handleDocumentSelection}
        disabled={fileResponses.length >= fileLimit} // Disable button when fileLimit is reached
        icon={'plus'}
        style={styles.uploadButton}>
        {fileResponses.length >= fileLimit
          ? 'Upload'
          : fileResponses.length > 0
          ? 'Upload Another'
          : 'Upload'}
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  uploadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  uplodedFiles: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  fileName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1F1B13',
  },
  removeButton: {
    color: '#CC7914',
  },
  uploadButton: {
    // Add styles for the upload button
  },
});
export default Upload;
