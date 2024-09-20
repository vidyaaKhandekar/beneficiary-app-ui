export default () => {
  return {
    searchbar: {
      width: 248,
      flexDirection: 'row-reverse',
      paddingHorizontal: 30,
      backgroundColor: '#E9E7EF',
      textAlign:'centre',
    },
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
    card: {
        height: 124, // Hug (124px)
        borderRadius: 10,
        margin: 10,
      },
  };
};
