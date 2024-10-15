import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

// Function to save tokens
export const saveToken = async (token, refreshToken) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

// Function to retrieve the token
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (token !== null && refreshToken !== null) {
      return {token, refreshToken};
    } else {
      return null; // Return null if no token found
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};

// Function to remove tokens
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken'); // Remove userToken
    await AsyncStorage.removeItem('refreshToken'); // Remove refreshToken
  } catch (error) {
    console.error('Error removing tokens:', error);
  }
};

export const getTokenData = async () => {
  const {token} = await getToken();
  if (token) {
    try {
      return jwtDecode(token);
    } catch (e) {
      return {};
    }
  }
};
