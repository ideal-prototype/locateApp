import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
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
