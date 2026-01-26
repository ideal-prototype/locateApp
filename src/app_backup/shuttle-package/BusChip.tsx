
import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import type { BusId } from './types';

export const BusChip: React.FC<{ id: BusId; active?: boolean; onPress?: ()=>void }>=({id, active, onPress})=>{
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && styles.active]}>
      <View style={styles.row}><Text style={styles.label}>{id}</Text></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#e0f2fe',
    borderColor: '#93c5fd',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  label: { fontSize: 13, includeFontPadding: false },
});
