import * as React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.Searchcontainer}>
      <View style={styles.searchWrapper}>
        {/* Search Icon on the left */}
        <Icon name="search" size={24} color="#45464F" style={styles.icon} />

        {/* TextInput for search bar */}
        <TextInput
          placeholder="Search By Name"
          placeholderTextColor={styles.placeholderTextColor.color}
          style={styles.searchbar}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Searchcontainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  searchWrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#E9E7EF',
    paddingHorizontal: 10,
    borderRadius: 28,
  },
  searchbar: {
    flex: 1,
    height: 48,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholderTextColor: {
    color: '#45464F',
  },
});

export default Searchbar;
