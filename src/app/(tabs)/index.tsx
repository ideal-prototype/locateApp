
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useShuttle } from '../../context/ShuttleContext';
import { BusChip } from '../../components/BusChip';
import { LocationControl } from '../../components/LocationControl';
import type { BusId } from '../../types/shuttle';

const const_buses: BusId[] = ['1号車（A）', '1号車（B）', '2号車（A）'];

export default function LocationScreen() {
  const { date, bus, setBus } = useShuttle();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LocationControl />

      <View style={styles.panel}>
        <Text style={styles.heading}>日付</Text>
        <Text selectable>{date}</Text>
        <Text style={styles.heading}>号車</Text>
        <View style={{ gap: 6 }}>
          {const_buses.map(bid => (
            <BusChip key={bid} id={bid} active={bus === bid} onPress={() => setBus(bid)} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  panel: { gap: 8 },
  heading: { fontWeight: '800' },
});
