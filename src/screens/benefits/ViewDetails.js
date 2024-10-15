import React from 'react';
import {FlatList, View, Text, StyleSheet, ScrollView} from 'react-native';
import {details} from '../../constatnt/Constant';
import CustomButton from '../../components/common/button/Button';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import Layout from '../../components/common/layout/Layout';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-paper';
const ViewDetails = () => {
  const [visibleDialog, setVisibleDialog] = React.useState(false);
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('BenefitsListing');
  };
  const openCOnfirmDialog = () => {
    setVisibleDialog(true);
  };
  const closeCOnfirmDialog = () => {
    setVisibleDialog(false);
  };
  const renderItem = ({item: detailItem}) => (
    <View style={styles.listItem}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.itemText}>{detailItem}</Text>
    </View>
  );
  return (
    <Layout
      _heading={{
        heading: 'Pre-Matric Scholarship-ST',
        subHeading: 'Application for SC Scholarship1',
        handleBack,
      }}>
      <ScrollView contentContainerStyle={styles.container}>
        {details?.map(item => {
          return (
            <View key={item.id} style={styles.sidePadding}>
              <Text style={styles.title}>{item?.title}</Text>
              <View style={styles.benefitAmount}>
                <Icon source={'currency-inr'} size={16} color="#484848" />
                <Text style={{fontSize: 14, marginLeft: 12}}>
                  {item?.amount}
                </Text>
              </View>
              <Text style={styles.descriptionHeading}>Details</Text>
              <Text style={styles.description}>Details{item?.desc}</Text>
              <Text numberOfLines={8} style={styles.description}>
                {item.desc1}
              </Text>
              <Text style={styles.descriptionHeading}>
                Objectives of the Pre-matric Scholarship-ST:
              </Text>
              <FlatList
                data={item.objective}
                renderItem={({item: objectiveItem}) =>
                  renderItem({item: objectiveItem})
                }
                keyExtractor={objectiveItem => objectiveItem}
                style={styles}
                scrollEnabled={false}
              />

              <Text style={styles.descriptionHeading}>Key Points:</Text>
              <FlatList
                data={item.keyPoints}
                renderItem={({item: keyPointsItem}) =>
                  renderItem({item: keyPointsItem})
                }
                keyExtractor={keyPointsItem => keyPointsItem}
                scrollEnabled={false}
              />
              <Text style={styles.descriptionHeading}>
                Mandatory Documents:
              </Text>
              <FlatList
                data={item.document}
                renderItem={({item: documentItem}) =>
                  renderItem({item: documentItem})
                }
                keyExtractor={documentItem => documentItem}
                scrollEnabled={false}
              />
              <CustomButton
                label="Proceed To Apply"
                marginTop={18}
                height={40}
                width={'95%'}
                handleClick={() => openCOnfirmDialog()}
              />
              <ConfirmationDialog
                dialogVisible={visibleDialog}
                closeDialog={closeCOnfirmDialog}
              />
            </View>
          );
        })}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {},
  sidePadding: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: '#433E3F',
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    fontSize: 14,
    color: '#484848',
    marginTop: 1,
    fontFamily: 'Poppins-Regular',
    paddingBottom: 12,
  },
  benefitAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountHeading: {fontSize: 18, fontFamily: 'Poppins-Regular'},
  description: {
    fontSize: 14,
    color: '#433E3F',
    marginVertical: 8,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontFamily: 'Poppins-Regular',
  },
  descriptionHeading: {
    fontSize: 16,
    color: '#433E3F',
    marginVertical: 8,
    fontFamily: 'Poppins-Medium',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  listItem: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  bullet: {
    fontSize: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#433E3F',
  },
  headerline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ViewDetails;
