import { Tabs } from 'expo-router';
import React from 'react';
import { useNavigation }  from 'expo-router'
import { useEffect } from 'react'

import Logout from '../../components/Logout'
import CacheClear from '../../components/CacheClear'
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  const navigation = useNavigation()
  useEffect(() => {
  
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerRight}>
            <Logout />
            <CacheClear />
          </View>
        )
      }
    })
  }, [])

  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#f8f9fa' },
        lazy: false,
      }}
    >
      <Tabs.Screen
        name="TabLocate"
        options={{
          title: '位置情報'
        }}
      />
      <Tabs.Screen
        name="TabBusSelect"
        options={{
          title: 'バス選択'
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: '設定'
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
