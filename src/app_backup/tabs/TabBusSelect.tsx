import { StyleSheet, View } from 'react-native'

import BusSelect from '../../components/BusSelect'
import Footer from '../../components/Footer'

const TabBusSelect = (): JSX.Element => {

  return (
    <View style={styles.container}>
      <BusSelect />
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

export default TabBusSelect;
