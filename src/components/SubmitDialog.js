import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text, IconButton} from 'react-native-paper';
import PropTypes from 'prop-types';
const SubmitDialog = ({dialogVisible, closeSubmit}) => {
  // Function to call the parent's function
  const sendCloseDialog = () => {
    closeSubmit(false);
  };
  return (
    <View>
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={sendCloseDialog}
          style={styles.container}>
          <View style={styles.dialogHeader}>
            <View>
              <Text style={styles.applicationText}>Application Submitted</Text>
              <Text style={styles.statusText}>Confirmation</Text>
            </View>
            <IconButton icon="close" onPress={sendCloseDialog} />
          </View>
          <Dialog.Content style={styles.dialogContent}>
            <Text style={styles.text}>
              Your application to the <Text> </Text>
              <Text style={styles.scholarshipNameText}>
                Pre-Matric Scholarship-SC
              </Text>
              <Text> </Text>
              Benefit has been submitted!
            </Text>
            <Text style={styles.applicationIdText}>Application ID: 1303</Text>
          </Dialog.Content>
          <Dialog.Actions>
            {/* Applying styles to the Button */}
            <View style={styles.view}>
              <Button
                mode="contained"
                onPress={sendCloseDialog}
                style={styles.actionButton}>
                Okay
              </Button>
            </View>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
SubmitDialog.propTypes = {
  dialogVisible: PropTypes.bool.isRequired, // Ensure that dialogVisible is a required boolean
  closeSubmit: PropTypes.func.isRequired, // Ensure that closeDialog is a required function
};
const styles = StyleSheet.create({
  container: {backgroundColor: '#FAFAFA'},
  dialogHeader: {
    height: 80,
    paddingVertical: 12,
    paddingHorizontal: 8,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  applicationText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
    textAlign: 'left',
    color: '#41424B',
  },
  statusText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'left',
    color: '#41424B',
  },
  dialogContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 10,
    gap: 20,
  },
  dialogAction: {
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 10,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
  },
  scholarshipNameText: {
    fontFamily: 'Poppins-Medium',
    color: '#3C5FDD',
  },
  applicationIdText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: 400,
  },
  view: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  actionButton: {
    width: 137,
    gap: 8,
    height: 40,
  },
});
export default SubmitDialog;
