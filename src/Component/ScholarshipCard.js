import * as React from 'react';
import {Avatar, IconButton, Card, Button} from 'react-native-paper';
import Theme from '../Theme/Theme';
import { View,Text, StyleSheet, Image, FlatList,Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDialog from './Dialog';
const data = [
  {
    id: '1',
    date:"12 September 2024",
    title: 'SC Scholarship 1',
    description: '5000 INR',
    address: 'Madhya Pradesh',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '2',
    date:"12 September 2024",
    title: 'SC Scholarship 1',
    description: '35,000 INR',
    address: 'Madhya Pradesh',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '3',
    date:"12 September 2024",
    title: 'SC Scholarship 1',
    description: '12,000 INR',
    address: 'Madhya Pradesh',
    imageUrl: 'https://via.placeholder.com/50',
  },
];
const API_URL = 'https://example.com/api/cards'; // Replace with your real API URL
const styles = Theme();


const ScholarshipCard = () => {
  // const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true); // Track if more data is available
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const loadData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}?page=${page}`);
      const newData = response.data.results;

      // Check if there is no more data
      if (newData?.length === 0) {
        setHasMore(false);
      }

      // setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    loadData(); // Initial data load
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{ marginVertical: 20 }} />;
  };
  // Function to open the dialog and set selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setDialogVisible(true);
  };
  
  // Function that will be passed to child and called by the child
  const closeDialog = (value) => {
    setDialogVisible(value);
  };
  const CardItem = ({ item }) => (
    <TouchableOpacity style={styles.card}  onPress={() => openModal(item)}>
    {/* Left Image */}
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
  
    {/* Center Content: Title, Description, Address */}
    <View style={styles.content}>
    <Text style={styles.title}>{item.date}</Text>
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.address}>{item.address}</Text>
    </View>
    
    {/* Right Icon */}
    <Icon name="chevron-forward" size={24} color="#888" style={styles.icon} />
  </TouchableOpacity>
  );
  return(
  <View>
  <FlatList
  data={data}
      renderItem={({ item }) => <CardItem item={item} />}
      keyExtractor={item => item.id.toString()} // Make sure the key is unique
      contentContainerStyle={styles.listContainer}
      onEndReached={loadData}
      onEndReachedThreshold={0.5} // Trigger loading more when the scroll is halfway through the list
      ListFooterComponent={renderFooter} // Loading spinner when fetching more data
/>

{/* Child component contains the Dialog */}
<CustomDialog dialogVisible={dialogVisible} closeDialog={closeDialog}/>
</View>
)
};

export default ScholarshipCard;
