import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from './Icon'

import { router }  from 'expo-router'

interface Props {
  isLogin?: boolean
}

const handleLogout = (): void => {
  console.log('logout')
  router.replace('auth/Login')
}

const Header = (props: Props): JSX.Element => {
  const { isLogin } = props
  return (
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>ココロケーション</Text>
          <TouchableOpacity onPress={handleLogout} style={[styles.headerRight, isLogin ? { display: 'none' } : {}]}>
            <Icon name='exit' size={20} color='white' />
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end',
  },
  headerInner: {
    alignItems: 'center',
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 32,
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default Header
