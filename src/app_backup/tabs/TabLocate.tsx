import { StyleSheet, View } from 'react-native'

import Locate from '../../components/Locate'
import Footer from '../../components/Footer'

const TabLocate = (): JSX.Element => {

  return (
    <View style={styles.container}>
      <Locate />
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

export default TabLocate;
