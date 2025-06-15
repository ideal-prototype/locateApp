import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const Settings = (): JSX.Element => {
  const handleClearHistory = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('履歴が全て削除されました');
    } catch (error) {
      console.error('履歴削除エラー:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('session');
      router.replace('/Login');
    } catch (error) {
      console.error('サインアウトエラー:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => Alert.alert('利用規約')}>
        <Text style={styles.text}>利用規約</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => Alert.alert('プライバシーポリシー')}>
        <Text style={styles.text}>プライバシーポリシー</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => Alert.alert('Copyright © 2023')}>
        <Text style={styles.text}>Copyright</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleClearHistory}>
        <Text style={styles.text}>履歴の全削除</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleSignOut}>
        <Text style={styles.text}>サインアウト</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default Settings;
