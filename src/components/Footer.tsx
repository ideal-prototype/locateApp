import { StyleSheet, Text, View } from 'react-native';

const Footer = (): JSX.Element => {
  return (
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>© 2025 IDEA-L Co.,Ltd.</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLabel: {
    color: '#000000',
  },
});

export default Footer
