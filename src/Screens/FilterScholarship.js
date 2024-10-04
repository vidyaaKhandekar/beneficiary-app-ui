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
import PropTypes from 'prop-types'; // Import prop-types for prop validation

const FilterScholarship = ({dialogVisible, closeDialog}) => {
  const [selectedEducation, setSelectedEducation] = React.useState(null);
  const [selectedGender, setSelectedGender] = React.useState(null);
  const [selectedIncome, setSelectedIncome] = React.useState(null);
  const [selectedAmount, setSelectedAmount] = React.useState(null);
  const [selectedSubject, setSelectedSubject] = React.useState(null);

  return (
    <View>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={closeDialog}>
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
              onChangeValue={setSelectedEducation} // Directly set the selected value
              defaultValue={selectedEducation}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
            <CustomDropdown
              testId={'select-gender'}
              items={Gender}
              placeholder="Select Gender"
              onChangeValue={setSelectedGender}
              defaultValue={selectedGender}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
            <CustomDropdown
              testId={'select-income'}
              items={IncomeRange}
              placeholder="Income Range"
              onChangeValue={setSelectedIncome}
              defaultValue={selectedIncome}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
            <CustomDropdown
              testId={'select-benefit-amount'}
              items={BenefitAmount}
              placeholder="Benefit Amount"
              onChangeValue={setSelectedAmount}
              defaultValue={selectedAmount}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
            <CustomDropdown
              testId={'select-subject'}
              items={Subjet}
              placeholder="Subject"
              onChangeValue={setSelectedSubject}
              defaultValue={selectedSubject}
              zIndex={5000}
              containerStyle={styles.dropdownContainer}
            />
          </Dialog.Content>
          <Dialog.Actions>
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

// Adding prop types for FilterScholarship component
FilterScholarship.propTypes = {
  dialogVisible: PropTypes.bool.isRequired, // Prop to control dialog visibility
  closeDialog: PropTypes.func.isRequired, // Function to close the dialog
};

const styles = StyleSheet.create({
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
  dropdownContainer: {
    marginVertical: 8,
  },
});

export default FilterScholarship;
