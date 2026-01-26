
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useShuttle } from './state';
import { BusChip } from './BusChip';

export const LocationScreen: React.FC = () => {
  const { date, bus, setBus, setDate } = useShuttle();
  const [sending, setSending] = useState(false);
  const buses: const_buses = ['1号車（A）','1号車（B）','2号車（A)'] as const;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <Pressable style={[styles.giantBtn, sending? styles.stop : styles.play]} onPress={()=> setSending(prev=>!prev)}>
          <Text style={styles.glyph}>{sending? '⏹️' : '▶'}</Text>
          <Text style={styles.stateText}>{sending? '送信中（タップで停止）' : '停止中（タップで送信）'}</Text>
        </Pressable>
      </View>
      <View style={styles.panel}>
        <Text style={styles.heading}>日付</Text>
        <Text selectable>{date}</Text>
        <Text style={styles.heading}>号車</Text>
        <View style={{gap:6}}>
          {buses.map(bid=> (
            <BusChip key={bid} id={bid} active={bus===bid} onPress={()=> setBus(bid as any)} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  top: { alignItems: 'center', marginBottom: 16 },
  panel: { gap: 8 },
  heading: { fontWeight: '800' },
  giantBtn: { alignItems: 'center', justifyContent: 'center', width: 200, height: 200, borderRadius: 100, borderWidth: 4 },
  play: { backgroundColor: '#fff', borderColor: '#22c55e' },
  stop: { backgroundColor: '#fff', borderColor: '#ef4444' },
  glyph: { fontSize: 42 },
  stateText: { marginTop: 8, fontWeight: '700' },
});

const const_buses = ['1号車（A）','1号車（B）','2号車（A)'] as const;
