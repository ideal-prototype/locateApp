
import React, { createContext, useContext, useMemo, useState } from 'react';
import type { BusId, Direction, Roster, Kid } from './types';

export type ShuttleState = {
  date: string;
  bus: BusId;
  direction: Direction;
  rosterMap: Record<string, Roster>; // key = `${date}|${bus}|${direction}`
  setDate: (d: string) => void;
  setBus: (b: BusId) => void;
  setDirection: (dir: Direction) => void;
  updateKidStatus: (kidId: string, status: Kid['status']) => void;
};

const today = new Date().toISOString().slice(0,10);

const initialKids = (count: number): Kid[] => Array.from({length: count}).map((_,i)=>({
  id: `kid-${i+1}`,
  fullname: `あまね さき ${i+1}`,
  status: '待機' as const,
}));

function keyOf(date: string, bus: BusId, direction: Direction){
  return `${date}|${bus}|${direction}`;
}

const ShuttleCtx = createContext<ShuttleState | null>(null);

export const ShuttleProvider: React.FC<{children?: React.ReactNode}> = ({children}) => {
  const [date, setDate] = useState(today);
  const [bus, setBus] = useState<BusId>('1号車（A）');
  const [direction, setDirection] = useState<Direction>('行き');

  // 初期名簿（例）：A=15名、B=16名、2A=0名、徒歩組は非対象
  const [rosterMap, setRosterMap] = useState<Record<string, Roster>>(()=>{
    const seed: Record<string, Roster> = {};
    (['1号車（A）','1号車（B）','2号車（A）'] as BusId[]).forEach(b=>{
      (['行き','帰り'] as Direction[]).forEach(dir=>{
        const kids = b==='2号車（A）' ? initialKids(0) : b==='1号車（A）' ? initialKids(15) : initialKids(16);
        const k = keyOf(today,b,dir);
        seed[k] = { bus: b, direction: dir, date: today, kids };
      });
    });
    return seed;
  });

  const updateKidStatus = (kidId: string, status: Kid['status']) => {
    const k = keyOf(date,bus,direction);
    const roster = rosterMap[k];
    if(!roster) return;
    const kids = roster.kids.map(kd=> kd.id===kidId ? {...kd, status} : kd);
    setRosterMap(prev=> ({...prev, [k]: {...roster, kids}}));
  };

  const value = useMemo(()=>({date,bus,direction,rosterMap,setDate,setBus,setDirection,updateKidStatus}),[date,bus,direction,rosterMap]);
  return <ShuttleCtx.Provider value={value}>{children}</ShuttleCtx.Provider>;
};

export const useShuttle = () => {
  const ctx = useContext(ShuttleCtx);
  if(!ctx) throw new Error('useShuttle must be used within ShuttleProvider');
  return ctx;
};
