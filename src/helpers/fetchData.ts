import { Alert } from 'react-native';
import { Dispatch } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CHATSDATA } from '../mockData';
import { getData } from '../redux/chatsSlice';

export const fetchData = async (dispatch: Dispatch) => {
  // to reset values in local storage
  // AsyncStorage.removeItem('chatData');

  // imitation of receiving data from the server
  try {
    let dataFromStorage = await AsyncStorage.getItem('chatData');
    if (!dataFromStorage) {
      await AsyncStorage.setItem('chatData', JSON.stringify({ users: CHATSDATA }));
    }
    dataFromStorage = await AsyncStorage.getItem('chatData');
    dispatch(getData(dataFromStorage ? JSON.parse(dataFromStorage)?.users : null));
  } catch (e) {
    Alert.alert('Error fetching data!');
  }
};
