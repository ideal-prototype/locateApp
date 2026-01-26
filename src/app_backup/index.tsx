import { Redirect } from 'expo-router'
//import { onAuthStat } from '@aws-amplify/auth'

const Index = (): JSX.Element => {
  // useEffect(() => {
  //   onAuthStateChanged(state, (user) => {
  //     if (user !== null) {
  //       return <Redirect href='content/Main' />
  //     } else {
  //       return <Redirect href='auth/Login' />
  //     }
  //   })
  // }, [])

  return <Redirect href='/Login' />
  //return <Redirect href='/tabs/TabLocate' />
}

export default Index;
