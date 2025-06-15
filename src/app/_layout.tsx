import { Stack } from 'expo-router';
import { Amplify } from 'aws-amplify';
import config from '../aws-exports';

Amplify.configure(config);
console.log("Amplify.configure()");

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467FD3',
    },
    headerTintColor: '#fff',
    headerTitle: 'マイローCar',
    headerBackTitle: '戻る',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
  }} />
}

export default Layout;
