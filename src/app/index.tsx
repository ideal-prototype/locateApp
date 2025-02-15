import { Redirect } from 'expo-router';

const Index = (): JSX.Element => {
  return <Redirect href='auth/Login' />
  //return <Redirect href='content/Main' />
}

export default Index
