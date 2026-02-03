import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import Logout from '../../components/Logout';
import CacheClear from '../../components/CacheClear';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#467FD3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
        headerRight: () => (
          <View style={styles.headerRight}>
            <CacheClear />
            <Logout />
          </View>
        ),
        headerShown: true,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '位置情報起動',
          headerTitle: '位置情報起動画面',
        }}
      />
      <Tabs.Screen
        name="boarding"
        options={{
          title: '乗車確認',
          headerTitle: '乗車確認画面',
        }}
      />
      <Tabs.Screen
        name="roster"
        options={{
          title: '乗車名簿更新',
          headerTitle: '乗車名簿更新画面',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    gap: 15,
  },
});
