import { StyleSheet, View, TextInput } from 'react-native'
import { router }  from 'expo-router'
import { useState }  from 'react'

import Button from '../../components/Button'
import Footer from '../../components/Footer'

const handleLogin = (): void => {
  console.log('login')
  router.replace('content/Main')
}

const Login = (): JSX.Element => {
  const [accountId, setAccountId] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          value={accountId}
          onChangeText={ (text) => {setAccountId(text)} }
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='アカウントID'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={ (text) => {setPassword(text)} }
          autoCapitalize='none'
          secureTextEntry={true}
          placeholder='パスワード'
          textContentType='password'
         />
        <Button onPress={handleLogin} label="ログイン"></Button>
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0faf8',
  },
  inner: {
    fontSize: 24,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
    height: 48,
    padding: 12,
    margin: 8,
    fontSize: 18,
  },
});

export default Login
