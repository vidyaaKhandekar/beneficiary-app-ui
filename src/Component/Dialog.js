import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, Text, IconButton } from 'react-native-paper';
import Theme from '../Theme/Theme';
const BORDER_COLOR = '#ccc';
const BORDER_WIDTH = 1;
const CustomDialog = ({dialogVisible,closeDialog}) => {
    const theme = Theme();
    
    // Function to call the parent's function
  const sendCloseDialog = () => {
    closeDialog(false);
  };
  return (
    <View>
       {/* Child component contains the FlatList */}
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={sendCloseDialog}>
          <View style={theme.dialogHeader}>
            <View>
              <Text
                style={theme.applicationText}>
                Applicatin1234
              </Text>
              {/* Styling for Status Text */}
              <Text style={theme.statusText}
              >
                status
              </Text>
            </View>
            <IconButton icon="close" onPress={sendCloseDialog} />
          </View>
          <Dialog.Content >
            <Text variant="bodyMedium">This is a simple dialog</Text>
            
          </Dialog.Content>
          <Dialog.Actions>
            {/* Applying styles to the Button */}
            <Button
              mode="contained"
              onPress={sendCloseDialog}
             
              style={{
                width: 288,        
                gap: 8,            
              }}
              
            >
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
export default CustomDialog;