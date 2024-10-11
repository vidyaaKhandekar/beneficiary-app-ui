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
  height = 56,
  isRenderLabel = true,
  borderRadius = 4,
  fontSize = 16,
  width,
  iconSize = 20,
  marginLeft = 0,
  borderColor = '#767680',
  padding = 12,
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FAFAFA',
      padding: padding,
    },
    dropdown: {
      height: height,
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius: borderRadius,
      paddingHorizontal: 8,
      width: width && width,
    },
    FocusedDropdown: {
      height: height,
      borderColor: '#3C5FDD',
      borderWidth: 1,
      borderRadius: borderRadius,
      paddingHorizontal: 8,
      width: width && width,
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
      fontSize: fontSize,
      color: '#1A1B21',
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
      lineHeight: 24,
      letterSpacing: 0.5,
      marginLeft: marginLeft,
    },
    selectedTextStyle: {
      fontSize: fontSize,
    },
    iconStyle: {
      width: iconSize,
      height: iconSize,
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
      color: 'red',
    },
    itemTextStyle: {
      color: '#1A1B21',
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
    },
    containerStyle: {height: 'auto', overflow: 'scroll'},
  });
  const renderLabel = () => {
    return (
      <Text style={isFocus ? styles.focusedLabel : styles.label}>
        {DropdownLabel}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {isRenderLabel && renderLabel()}
      <Dropdown
        style={isFocus ? styles.FocusedDropdown : styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.itemTextStyle}
        data={Data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholderLabel}
        containerStyle={styles.containerStyle}
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
            size={iconSize}
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
