
import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';

export const Segmented: React.FC<{ options: string[]; value: string; onChange: (v:string)=>void }>=({options,value,onChange})=>{
  return (
    <View style={styles.wrap}>
      {options.map(opt=> (
        <Pressable key={opt} onPress={()=>onChange(opt)} style={[styles.btn, value===opt && styles.active]}>
          <Text style={[styles.text, value===opt && styles.textActive]}>{opt}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', gap: 6 },
  btn: { flex: 1, paddingVertical: 12, paddingHorizontal: 16, borderWidth: 2, borderColor: '#e5e7eb', borderRadius: 999, backgroundColor: '#fff' },
  active: { backgroundColor: '#e0f2fe', borderColor: '#93c5fd' },
  text: { fontSize: 16, fontWeight: '700', textAlign: 'center' },
  textActive: { color: '#0369a1' },
});
