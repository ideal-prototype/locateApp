import { StyleSheet, View } from 'react-native'
import { useNavigation }  from 'expo-router'
import { useEffect } from 'react'

import Logout from '../../components/Logout'
import Locate from '../../components/Locate'
import Tab from '../../components/Tab'
import Footer from '../../components/Footer'

const Main = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Logout />
        )
      }
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <Tab />
      <Locate isLocating={false} />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0faf8',
  },
});

export default Main
