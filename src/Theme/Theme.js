export default () => {
  return {
    searchbar: {
      width: '70%',
      flexDirection: 'row-reverse',
      paddingHorizontal: 30,
      backgroundColor: '#E9E7EF',
      textAlign: 'centre',
      marginLeft:6,
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
      marginTop:14,
      marginBottom:14,
      progressBarColor: {
        primaryColor: '#0B7B69',
      },
      progressBar: {
        borderRadius: 10,
        backgroundColor: '#CC7914',
      },
    },
  };
};
