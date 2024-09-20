import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import Theme from '../Theme/Theme';

const CustomSearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchBarStyles = Theme();

  return (
    <Searchbar
      placeholder="Search By Name"
      placeholderTextColor={searchBarStyles.placeholderTextColor} // Add this prop
      placeholderFontSize={searchBarStyles.placeholderFontSize} // Add this prop
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={[searchBarStyles.searchbar, { textAlign: 'center' }]} // Use the separate style function
    />
  );
};

export default CustomSearchbar;
