import { TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

import Icon from './Icon'

const handleClear = async () => {
  console.log('cacheClear')
  try {
    // const keys = await AsyncStorage.getItem('secureStoreKeys');
    // console.log(`${keys} を取得`)
    // console.log(`${await SecureStore.getItemAsync('device-unique-id')} を取得`)

    console.log(`device-unique-idを取得！${await SecureStore.getItemAsync('device-unique-id')}`);
    await SecureStore.deleteItemAsync('device-unique-id');
    // await AsyncStorage.clear();
    console.log(`device-unique-idが削除されました！${await SecureStore.getItemAsync('device-unique-id')}`);
  
    // 以前保存したキーのリストを取得
    // if (keys) {
    //   const keyList = JSON.parse(keys);
    //   for (const key of keyList) {
    //     await SecureStore.deleteItemAsync(key);
    //     console.log(`${key} を削除`)
    //   }
    //   console.log('SecureStore のすべてのデータを削除しました！');
    // }
    // await AsyncStorage.clear();
    console.log('キャッシュデータが削除されました！');
    Alert.alert('キャッシュ削除。【デバッグ用】');
  } catch (e) {
    console.error('キャッシュクリアエラー:', e);
  }
}

const CacheClear = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handleClear}>
      <Icon name='quill' size={25} color='white' />
    </TouchableOpacity>
  )
}

export default CacheClear;
