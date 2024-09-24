import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, Text, IconButton } from 'react-native-paper';
import CustomButton from './CustomButton';
import Theme from '../Theme/Theme';

const CustomDialog = () => {
  const theme = Theme();
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View>
    <Button onPress={showDialog}>Show Dialog</Button>
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <View style={theme.dialogHeader}>
          <View>
            <Text style={theme.applicationText}>Applicatin1234</Text>
            <Text style={theme.statusText}>status</Text>
          </View>
          <IconButton icon="close" onPress={hideDialog} />
        </View>

        <Dialog.Content style={theme.content}>
          {/* Need to add contetnt over here*/}
          <Text variant="bodyMedium">This is a simple dialog</Text>
          <Text variant="bodyMedium">This is a simple dialog</Text>
          <Text variant="bodyMedium">This is a simple dialog</Text>
        </Dialog.Content>

        <Dialog.Actions>
          {/* on click create function for procced further action*/}
          <CustomButton
            label="Proceed to apply"
            handleClick={hideDialog}
            width={288}
            height={40}
          />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  </View>
  );
};

export default CustomDialog;
