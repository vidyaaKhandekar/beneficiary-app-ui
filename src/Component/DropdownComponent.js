import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DropdownComponent = ({
  DropdownLabel = 'Select',
  placeholderLabel = 'Select',
  Data,
  helperText = '',
  helperData = false,
  error = false,
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={isFocus ? styles.focusedLabel : styles.label}>
        {DropdownLabel}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={isFocus ? styles.FocusedDropdown : styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        data={Data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholderLabel}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item?.value);
          setIsFocus(false);
        }}
        renderRightIcon={() => (
          <Icon
            name={isFocus ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={24}
            color={isFocus ? 'blue' : '#45464F'}
          />
        )}
      />
      {helperData && (
        <Text style={[styles.helperText, error && styles.errorText]}>
          {helperText}
        </Text>
      )}
    </View>
  );
};

DropdownComponent.propTypes = {
  DropdownLabel: PropTypes.string,
  placeholderLabel: PropTypes.string,
  Data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  helperText: PropTypes.string,
  helperData: PropTypes.bool,
  error: PropTypes.bool,
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  dropdown: {
    height: 56,
    borderColor: '#767680',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  FocusedDropdown: {
    height: 56,
    borderColor: '#3C5FDD',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#FAFAFA',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
    color: '#45464F',
    fontFamily: 'Poppins-Regular',
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#1A1B21',
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  focusedLabel: {
    color: '#3C5FDD',
    position: 'absolute',
    backgroundColor: '#FAFAFA',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  helperText: {
    marginTop: 6,
    fontSize: 12,
    color: '#45464F',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
  errorText: {
    color: 'red', // Error state text color
  },
});
