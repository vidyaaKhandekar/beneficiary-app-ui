import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Theme from '../Theme/Theme';

const CustomDropdown=()=>{
    const searchBarStyles = Theme();
    const [open, setOpen] =  React.useState(false);
    const [value, setValue] =  React.useState(null);
    const [items, setItems] =  React.useState([
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ]);
    return(
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
    )

}

export default  CustomDropdown;