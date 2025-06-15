import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const getMobileId = async () => {
  return await SecureStore.getItemAsync('device-unique-id');
};

export const getApiUrl = async () => {
  const sessionData = await AsyncStorage.getItem('session');
  if (sessionData) {
    const session = JSON.parse(sessionData);
    return session.url ?? null;
  }
  return null;
};

export const getApiKey = async () => {
    const sessionData = await AsyncStorage.getItem('session');
  if (sessionData) {
    const session = JSON.parse(sessionData);
    return session.apiKey ?? null;
  }
  return null;
};

export const getMobileIdForInitialize = async () => {
  let mobileId = await SecureStore.getItemAsync('device-unique-id');
  if (!mobileId) {
    mobileId = uuidv4();
    await SecureStore.setItemAsync('device-unique-id', mobileId);
  }
  return mobileId;
};
