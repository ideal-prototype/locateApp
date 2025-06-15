import { StyleSheet, View, TextInput, Text } from 'react-native'
import { router }  from 'expo-router'
import { useState, useEffect }  from 'react'
import { API } from '@aws-amplify/api'
import { graphqlOperation } from '@aws-amplify/api-graphql'
import { getLogin } from '../graphql/queries'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getMobileIdForInitialize } from '../components/GetStorage';

import Button from '../components/Button'
import Footer from '../components/Footer'

const handleLogin = async (accountId: string, password: string): Promise<void> => {
  console.log('login')

  try {
    const result = await API.graphql(graphqlOperation(getLogin, {
      accountId: accountId,
      password: password
    }));
    console.log(result)
    
    const customer = (result as any).data?.listCustomers?.items[0];
    console.log(customer)

    if (customer) {
      // セッション情報を AsyncStorage に保存
      await AsyncStorage.setItem('session', JSON.stringify({
        customerId: customer.customerId,
        accountId: customer.accountId,
        apiKey: customer.apiKey,
        busId: customer.busId,
        url: customer.url
      }));
      // 端末固有IDを生成
      getMobileIdForInitialize();

      router.replace('tabs/TabLocate')
    } else {
      console.log('アカウントIDまたはパスワードが違います')
    }
  } catch (error) {
    console.error(error)
  }
}

const Login = (): JSX.Element => {
  const [accountId, setAccountId] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // セッションの確認
    const checkSession = async () => {
      try {
        const sessionData = await AsyncStorage.getItem('session');
        if (sessionData) {
          const session = JSON.parse(sessionData);
          console.log('セッション復元:', session);
          router.replace('tabs/TabLocate');
        }

      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  if (loading) {
    return <View><Text>読み込み中...</Text></View>;
  }

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
        <Button onPress={() => {handleLogin(accountId, password)}} label="ログイン"></Button>
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

export default Login;
