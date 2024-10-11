import React from 'react';
import {View, TextInput, StyleSheet, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {myApplicationData} from '../../constatnt/Constant';
import Layout from '../../components/common/layout/Layout';
import {useNavigation} from '@react-navigation/native';
const MyApplication = () => {
  const [isDisabled] = React.useState(false);
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('BenefitApplication');
  };

  return (
    <Layout
      _heading={{
        heading: 'My Applications',
        subHeading: 'Application for SC Scholarship1',
        handleBack,
      }}
      isScrollable>
      <View style={styles.applicationRow}>
        <Text style={styles.leftText}>Status</Text>
        <Text style={styles.rightText}>Applied</Text>
      </View>
      <ScrollView contentContainerStyle={styles.applicationContainer}>
        {myApplicationData?.map((field, index) => (
          <View key={field.id} style={styles.inputBlock}>
            {/* Label */}
            <Text style={styles.label}>{field.label} </Text>
            {/* Input Field with Icon */}
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, isDisabled ? styles.disabledInput : null]}
                value={field.value}
                //   onChangeText={(text) => handleInputChange(field, text)}
                editable={false}
                placeholder={field.value}
              />
              {/* Check Icon */}
              <Icon
                name="checkmark-outline"
                size={24}
                color="#0B7B69"
                style={styles.applicationIcon}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  dateText: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Poppins-Regular',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  amountText: {
    fontSize: 14,
    color: '#007BFF',
    fontFamily: 'Poppins-Regular',
  },
  stateText: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
  arrowText: {
    fontSize: 20,
    color: '#007BFF',
    fontFamily: 'Poppins-Regular',
  },
  applicationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#DEE4F9',
    height: 52,
  },
  leftText: {
    fontSize: 14,
    color: '#1F1B13',
    fontFamily: 'Poppins-Medium',
  },
  rightText: {
    fontSize: 10,
    color: '#0B7B69',
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  applicationContainer: {
    padding: 8,
    paddingBottom: 40,
  },
  inputBlock: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#1A1B21',
    fontFamily: 'Poppins-Medium',
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 12,
    padding: 8,
    fontFamily: 'Poppins-Regular',
    color: '#1A1B21',
  },
  disabledInput: {
    backgroundColor: '#F0F0F0',
    color: '#888',
  },
  applicationIcon: {
    marginLeft: 8,
  },
  status: {
    backgroundColor: '#DEE4F9',
  },
});
export default MyApplication;
