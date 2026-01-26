
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useShuttle } from '../context/ShuttleContext';

export const LocationControl: React.FC = () => {
  const { sending, setSending, location } = useShuttle();

  return (
    <View style={styles.top}>
      <Pressable style={[styles.giantBtn, sending ? styles.stop : styles.play]} onPress={() => setSending(prev => !prev)}>
        <Text style={styles.glyph}>{sending ? '⏹️' : '▶'}</Text>
        <Text style={styles.stateText}>{sending ? '送信中（タップで停止）' : '停止中（タップで送信）'}</Text>
      </Pressable>
      <Text style={styles.statusText}>
        {sending ? `送信中: ${location?.latitude?.toFixed(4) ?? '...'}, ${location?.longitude?.toFixed(4) ?? '...'}` : '停止中'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  top: { alignItems: 'center', marginBottom: 16 },
  giantBtn: { alignItems: 'center', justifyContent: 'center', width: 200, height: 200, borderRadius: 100, borderWidth: 4 },
  play: { backgroundColor: '#fff', borderColor: '#22c55e' },
  stop: { backgroundColor: '#fff', borderColor: '#ef4444' },
  glyph: { fontSize: 42 },
  stateText: { marginTop: 8, fontWeight: '700' },
  statusText: { marginTop: 10, fontSize: 12, color: '#888' },
});
