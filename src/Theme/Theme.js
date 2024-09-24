export default () => {
  return {
    // searchbar: {
    //   width: 248,
    //   flexDirection: 'row-reverse',
    //   paddingHorizontal: 30,
    //   backgroundColor: '#E9E7EF',
    //   textAlign:'centre',
    // },
    placeholderTextColor: '#45464F',
    placeholderFontSize: 16,
    appBarTheme: {
      marginTop: '24px',
      marginLeft: '12px',
    },
    fonts: {
      regular: {
        fontFamily: 'Poppins',
        fontSize: 13,
        fontStyle: 'italic',
        fontWeight: '400',
        lineHeight: 19.5,
        textAlign: 'left',
      },
    },
 
       Searchcontainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      searchbar: {
        flex: 3, // 80% width
        marginRight: 10, // Space between SearchBar and Dropdown
      },
      dropdownContainer: {
        flex: 1, // Takes up the other half of the space
      },
      dropdown: {
        height: 40,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fafafa',
      },
      dropdownStyle: {
        backgroundColor: '#fafafa',
      },
      searchBar: {
        flex: 1, // Takes up half the space
        height: 48,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        textAlign:'centre',
        backgroundColor: '#E9E7EF',
        marginRight: 6, // Add some spacing between the search bar and dropdown
      },
      listContainer: {
        padding: 10,
      },
      card: {
        flexDirection: 'row', // Align items in a row
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2, // For Android shadow
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 8, // Make it circular
        marginRight: 10,
      },
      content: {
        flex: 1, // Take up the remaining space between image and icon
        justifyContent: 'center',
        
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 14,
        color: '#666',
      },
      address: {
        fontSize: 14,
        color: '#999',
      },
      icon: {
        marginLeft: 'auto', // Push the icon to the right
      },
      dialogHeader: {
        height: 75,
        paddingVertical: 12,
        paddingHorizontal: 8,
        paddingLeft: 16,
        paddingBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      applicationText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.15,
        textAlign: 'left',
        color: '#41424B',
      },
      statusText: {
        fontFamily: 'Poppins',
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
      
      progressBarStyle: {
        width: '90%',
        height: 5,
        left: 15,
        borderRadius: 10,
        overflow: 'hidden',
        progressBarColor: {
          primaryColor: '#0B7B69',
        },
        progressBar: {
          borderRadius: 10,
          backgroundColor: '#CC7914',
        },
        
      },
      verticalSpace: {
        height: 10, // Adjust this value to set the desired vertical space
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
      },
      textContainer: {
        flex: 1,
      },
      dateText: {
        fontSize: 14,
        color: '#555',
      },
      nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5, // Optional space below name
      },
      amountText: {
        fontSize: 14,
        color: '#007BFF',
      },
      stateText: {
        fontSize: 14,
        color: '#888',
      },
      verticalSpace: {
        height: 10, // Adjust this value to set the desired vertical space
      },
      arrowText: {
        fontSize: 20,
        color: '#007BFF',
      },
  };
};
