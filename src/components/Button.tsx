import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  label: string
  onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    margin: 8,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});

export default Button;
