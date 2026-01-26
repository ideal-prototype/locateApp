
export type BusId = '1号車（A）' | '1号車（B）' | '2号車（A）';
export type Direction = '行き' | '帰り';

export type Kid = {
  id: string;
  fullname: string;
  status: '待機' | '乗車中' | '乗車確定' | '降車中' | '降車確定';
};

export type Roster = {
  bus: BusId;
  direction: Direction;
  date: string;
  kids: Kid[];
};
