import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from './Icon';

interface Props {
  isLocating: boolean
}

const Locate = (props: Props): JSX.Element => {
  const [isLocating, setIsLocating] = useState(props.isLocating);

  console.log('isLocating:', isLocating); // デバッグ用ログ

  const handleLocate = () => {
    console.log('handleLocate'); // デバッグ用ログ
    setIsLocating(!isLocating);
  }

  return (
      <View>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleLocate}>
            <View>
              {isLocating ? (
                <Icon name='stop' color='#D34F45' size={250} />
              ) : (
                <Icon name='play' color='#467FD3' size={250} />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width :0 , height: 8},
    elevation: 8,
    margin: 16,
  },
  sendButtonLabel: {
    color: '#fff',
    fontSize: 40,
  },
});

export default Locate
