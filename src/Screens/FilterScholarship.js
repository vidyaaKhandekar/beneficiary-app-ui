import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, Text, IconButton} from 'react-native-paper';

import CustomDropdown from '../Component/CustomDropdown';
import {
  EducationLevel,
  Gender,
  IncomeRange,
  BenefitAmount,
  Subjet,
} from '../Constatnt/Constant';

const FilterScholarship = ({dialogVisible, closeDialog}) => {
  const [selectedEducation, setSelectedEducation] = React.useState(null);
  const [selectedGender, setSelectedGender] = React.useState(null);
  const [selectedIncome, setSelectedIncome] = React.useState(null);
  const [selectedAmount, setSelectedAmount] = React.useState(null);
  const [selectedSubject, setSelectedSubject] = React.useState(null);
  return (
    <View>
      {/* Child component contains the FlatList */}
      <Button onPress={dialogVisible}>Show Dialog</Button>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={closeDialog} >
          <View style={styles.dialogHeader}>
            <View>
              <Text style={styles.applicationText}>Filters</Text>
            </View>
            <IconButton icon="close" onPress={closeDialog} />
          </View>
          <Dialog.Content>
            <CustomDropdown
              testId={'select-education'}
              items={EducationLevel}
              placeholder="Select Education"
              onChangeValue={value => setSelectedEducation(value)} // Handle value change
              defaultValue={selectedEducation}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
            <CustomDropdown
              testId={'select-gender'}
              items={Gender}
              placeholder="Select Gender"
              onChangeValue={value => setSelectedGender(value)} // Handle value change
              defaultValue={selectedGender}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
            <CustomDropdown
              testId={'select-income'}
              items={IncomeRange}
              placeholder="Income range"
              onChangeValue={value => setSelectedIncome(value)} // Handle value change
              defaultValue={selectedIncome}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
            <CustomDropdown
              testId={'select-benefit-amount'}
              items={BenefitAmount}
              placeholder="Benefit amount"
              onChangeValue={value => setSelectedAmount(value)} // Handle value change
              defaultValue={selectedAmount}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
            <CustomDropdown
              testId={'select-subject'}
              items={Subjet}
              placeholder="Subject"
              onChangeValue={value => setSelectedSubject(value)} // Handle value change
              defaultValue={selectedSubject}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
          </Dialog.Content>
          <Dialog.Actions>
            {/* Applying styles to the Button */}
            <Button
              testId={'click-done-filter'}
              mode="contained"
              onPress={closeDialog}
              style={{
                width: 288,
                gap: 8,
              }}>
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: ''},
  dialogHeader: {
    height: 70,
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
    marginVertical: 16,
  },
});
export default FilterScholarship;
