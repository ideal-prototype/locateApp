import { TouchableOpacity } from 'react-native';
import { router }  from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from './Icon'

const handleLogout = async (): Promise<void> => {
  console.log('logout')
  try {
    await AsyncStorage.removeItem('session');
    console.log('ログアウト成功');
    router.replace('/Login'); // ログイン画面へ遷移
  } catch (error) {
    console.error('ログアウト失敗:', error);
  }
}

const Logout = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handleLogout}>
      <Icon name='exit' size={25} color='white' />
    </TouchableOpacity>
  )
}

export default Logout;
