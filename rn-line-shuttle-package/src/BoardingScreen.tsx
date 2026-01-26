
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useShuttle } from './state';
import { Segmented } from './Segmented';
import { BusChip } from './BusChip';
import type { BusId, Direction } from './types';

export const BoardingScreen: React.FC = () => {
  const { date, bus, direction, setBus, setDirection, rosterMap } = useShuttle();
  const buses: BusId[] = ['1号車（A）','1号車（B）','2号車（A)'] as any;
  const dirOptions: Direction[] = ['行き','帰り'];

  const key = `${date}|${bus}|${direction}`;
  const roster = rosterMap[key];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>乗降車確認</Text>
      <View style={{gap:8}}>
        <Segmented options={dirOptions} value={direction} onChange={(v)=> setDirection(v as Direction)} />
        <View style={{flexDirection:'row', gap:6}}>
          {buses.map(bid=> (<BusChip key={bid} id={bid} active={bus===bid} onPress={()=> setBus(bid)} />))}
        </View>
      </View>
      <View style={{marginTop:16}}>
        {roster?.kids.map(k => (
          <View key={k.id} style={styles.row}>
            <Text style={styles.fullname}>{k.fullname}</Text>
            <Text style={styles.status}>{k.status}</Text>
          </View>
        )) || <Text style={{color:'#64748b'}}>該当データがありません</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: '800', marginBottom: 8 },
  row: { flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingVertical:8, borderBottomWidth: StyleSheet.hairlineWidth, borderColor:'#e5e7eb' },
  fullname: { fontWeight: '800', flexShrink: 1 },
  status: { marginLeft: 8, whiteSpace: 'nowrap' as any },
});
