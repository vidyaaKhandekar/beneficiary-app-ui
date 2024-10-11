import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const BenefitCard = ({item, navigation}) => (
  <View style={styles.card}>
    <View style={styles.topRightView}>
      <Text style={styles.dateText}>{item?.date}</Text>
    </View>
    <View style={styles.content}>
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
        {item?.eligible?.map(val => {
          return (
            <Text key={val} style={styles.chipColor}>
              {val}
            </Text>
          );
        })}
      </View>
      <Text style={styles.description}>{item?.description}</Text>
      <TouchableOpacity
        style={styles.viewDetailsRow}
        onPress={() => navigation.navigate('BenefitDetails')}>
        <Text style={styles.detailText}>View Details</Text>
        <Ionicons name="arrow-forward-outline" size={18} color="#0037B9" />
      </TouchableOpacity>
    </View>
  </View>
);
BenefitCard.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    benefitAmount: PropTypes.string.isRequired,
    eligible: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  applicationContainer: {
    padding: 8,
    paddingBottom: 40,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 35,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
  topRightView: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#0B7B69',
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 5,
    paddingLeft: 5,
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#FFFFFF',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.32,
    color: '#101828',
    fontFamily: 'Poppins-Regular',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.32,
    color: '#484848',
    paddingRight: 20,
    fontFamily: 'Poppins-Regular',
  },
  benefitAmount: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.32,
    color: '#484848',
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginLeft: 'auto',
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
    color: '#3C5FDD',
    fontSize: 11,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 1,
    height: 19,
    borderRadius: 4,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    fontFamily: 'Poppins-Regular',
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
    flexDirection: 'row',
  },
  detailText: {
    color: '#0037B9',
    fontSize: 14,
    marginRight: 8,
    fontFamily: 'Poppins-Medium',
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
  subTitle: {
    fontSize: 12,
    color: '#484848',
    fontFamily: 'Poppins-Regular',
  },
});
export default BenefitCard;
