import * as React from 'react';
import { View,TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Theme from '../Theme/Theme';

const CustomSearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [open, setOpen] =  React.useState(false);
  const [value, setValue] =  React.useState(null);
  const [items, setItems] =  React.useState([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]);
  const searchBarStyles = Theme();

  return (
    <View style={searchBarStyles.Searchcontainer}>
       <View style={searchBarStyles.row}>
    <Searchbar
      placeholder="Search By Name"
      placeholderTextColor={searchBarStyles.placeholderTextColor} // Add this prop
      placeholderFontSize={searchBarStyles.placeholderFontSize} // Add this prop
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={[searchBarStyles.searchbar, { textAlign: 'center' }]} // Use the separate style function
    />
     {/* <TextInput
        style={searchBarStyles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      /> */}
    <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Filter"
        containerStyle={searchBarStyles.dropdownContainer}
        style={searchBarStyles.dropdown}
        dropDownContainerStyle={searchBarStyles.dropdownStyle}
      />
</View>
    </View>
  );
};

export default CustomSearchbar;
