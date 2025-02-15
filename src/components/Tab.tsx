import { StyleSheet, Text, View } from 'react-native';

const Tab = (): JSX.Element => {
  return (
      <View style={styles.tabAria}>
        <View>
          <View>
            <Text>位置送信</Text>
            <Text>バス選択</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  tabAria: {

  },
});

export default Tab
