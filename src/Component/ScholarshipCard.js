import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const data = [
  {
    id: '1',
    date: '12 September 2024',
    title: 'Pre-Matric Scholarship-SC',
    subTitle: 'Ministry of Social Justice',
    benefitAmount: '3500 INR - 7700 INR',
    eligible: ['SC', 'Madhya Pradesh', 'All Genders'],
    description:
      'The Pre-matric Scholarship-SC is provided by the Ministry of Social Justice and the Tribal Welfare Department of Madhya Pradesh. It supports Class 9 and 10 students from low-income families with an annual income below ₹2,50,000. Both genders are eligible.',
    address: 'Madhya Pradesh',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '2',
    date: '12 September 2024',
    title: 'Pre-Matric Scholarship-ST',
    subTitle: 'Ministry of Social Justice',
    benefitAmount: '3500 INR - 7700 INR',

    eligible: ['ST', 'Madhya Pradesh', 'All Genders'],
    description:
      'The Pre-matric Scholarship-ST is provided by the Ministry of Tribal Welfare and the Tribal Welfare Department of Madhya Pradesh. It supports Class 9 and 10 students from low-income families with an annual income below ₹2,50,000. Both male and female students are eligible.',
    address: 'Madhya Pradesh',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '3',
    date: '12 September 2024',
    title: 'Pre-Matric Scholarship-ST',
    subTitle: 'Ministry of Social Justice',
    benefitAmount: '3500 INR - 7700 INR',

    eligible: ['ST', 'Madhya Pradesh', 'All Genders'],
    description:
      'The Pre-matric Scholarship-ST is provided by the Ministry of Tribal Welfare and the Tribal Welfare Department of Madhya Pradesh. It supports Class 9 and 10 students from low-income families with an annual income below ₹2,50,000. Both male and female students are eligible.',
    address: 'Madhya Pradesh',
    imageUrl: 'https://via.placeholder.com/50',
  },
];

const CardItem = ({item, navigation}) => (
  <View style={styles.card}>
    {/* Center Content: Title, Description, Address */}
    <Text style={styles.topRightText}>{item?.date}</Text>
    <View style={styles.content}>
      {/* <Text style={styles.title}>{item.date}</Text> */}
      <Text numberOfLines={2} style={styles.title}>
        {item?.title}
      </Text>
      <Text numberOfLines={2} style={styles.subTitle}>
        {item?.subTitle}
      </Text>
      <Text numberOfLines={2} style={styles.benefitAmount}>
        <Text style={styles.currencyIcon}>₹ </Text>
        {item?.benefitAmount}
      </Text>
      {/* Simple Chip */}
      <View style={styles.chipContainer}>
        {item?.eligible?.map((val, idx) => {
          return (
            // <Chip key={idx}  style={styles.chip}textStyle={styles.chipColor}>
            //   {val}
            // </Chip>
            <Text style={styles.chipColor}>{val}</Text>
          );
        })}
      </View>
      <Text style={styles.description}>{item?.description}</Text>
      <TouchableOpacity
        style={styles.viewDetailsRow}
        onPress={() => navigation.navigate('ScholarshipDetails')}>
        <Text style={styles.detailText}>View Details</Text>
        <Ionicons name="arrow-forward-outline" size={18} color="#0037B9" />
      </TouchableOpacity>
    </View>
  </View>
);
const ScholarshipCard = ({navigation}) => {
  const [dialogVisible, setDialogVisible] = React.useState(false);

  // Function that will be passed to child and called by the child
  const closeDialog = value => {
    setDialogVisible(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.applicationContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id.toString()} // Make sure the key is unique
        contentContainerStyle={styles.listContainer}
        // onEndReached={loadData}
        onEndReachedThreshold={0.5} // Trigger loading more when the scroll is halfway through the list
        // ListFooterComponent={renderFooter} // Loading spinner when fetching more data
      />

      {/* Child component contains the Dialog */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  applicationContainer: {
    padding: 8,
    paddingBottom: 40,
  },
  listContainer: {
    padding: 10,
    marginTop: 8,
  },

  card: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center',
    paddingTop: 35,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },
  topRightText: {
    position: 'absolute', // Position the text absolutely
    top: 2, // Adjust distance from the top of the card
    right: 0, // Align the text next to the right border
    fontSize: 12,
    fontWeight: '500', // Font weight as string
    color: 'white',
    backgroundColor: '#0B7B69',
    height: 21, // Fix height for consistency
    width: 140,
    borderTopRightRadius: 10, // Radius for top-right corner
    borderBottomLeftRadius: 10,
    paddingLeft: 10,
    paddingTop: 2, // Set a fixed width for the text box
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
    gap: 12,
  },
  title: {
    fontSize: 16, // Font size
    fontWeight: '500', // Font weight as a string
    lineHeight: 18, // Line height
    letterSpacing: 0.32, // Letter spacing
    color: '#101828', // Text color
  },
  description: {
    fontSize: 12, // Font size
    fontWeight: '400', // Font weight as a string
    lineHeight: 18, // Line height
    letterSpacing: 0.32, // Letter spacing
    color: '#484848',
    paddingRight: 20,
  },
  benefitAmount: {
    fontSize: 12,
    fontWeight: '400', // Font weight as a string
    lineHeight: 18, // Line height
    letterSpacing: 0.32, // Letter spacing
    color: '#484848',
  },
  icon: {
    marginLeft: 'auto', // Push the icon to the right
  },

  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 9,
  },
  chip: {
    backgroundColor: 'white',
  },
  chipColor: {
    color: 'blue',
    fontSize: 11,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 1,
    height: 19,
    borderRadius: 4,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
  },
  currencyIcon: {
    fontSize: 18,
    color: '#484848',
  },
  viewDetailsCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    // textAlign:"center",
    flexDirection: 'row',
  },
  detailText: {
    color: '#0037B9',
    fontSize: 14,
    marginRight: 8,

  },
  viewDetails: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  viewDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
export default ScholarshipCard;
