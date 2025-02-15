import { TouchableOpacity } from 'react-native';
import { router }  from 'expo-router'

import Icon from './Icon'

const handleLogout = (): void => {
  console.log('logout')
  router.replace('auth/Login')
}

const Logout = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handleLogout}>
      <Icon name='exit' size={20} color='white' />
    </TouchableOpacity>
  )
}

export default Logout
