import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import PropTypes from 'prop-types'; // Importing prop-types

const Upload = ({fileLimit = 2}) => {
  const [fileResponses, setFileResponses] = useState([]);

  const handleDocumentSelection = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

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

  const clearFile = index => {
    const updatedFileResponses = fileResponses.filter((_, i) => i !== index);
    setFileResponses(updatedFileResponses);
  };

  return (
    <View style={styles.uploadContainer}>
      {fileResponses.length > 0 && (
        <View style={styles.uplodedFiles}>
          {fileResponses.map((file, index) => (
            <View key={index} style={styles.fileRow}>
              <Text style={styles.fileName}>{` ${file.name}`}</Text>
              <IconButton
                icon="close"
                color="#CC7914"
                size={24}
                onPress={() => clearFile(index)}
                style={styles.removeButton}
              />
            </View>
          ))}
        </View>
      )}

      <Button
        mode="text"
        onPress={handleDocumentSelection}
        disabled={fileResponses.length >= fileLimit}
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

Upload.propTypes = {
  fileLimit: PropTypes.number,
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
