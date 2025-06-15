import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { UseLocation } from './UseLocation';

import Icon from './Icon';

interface Props {
  isLocating?: boolean;
}

const BusSelect = (props: Props): JSX.Element => {
  const [isLocating, setIsLocating] = useState(props.isLocating ?? false);
  const { location, errorMsg, getCount, sendCount, exeTime, sendModel } = UseLocation(isLocating);

  const handleLocate = () => {
    setIsLocating((prev) => !prev);
  };

  useEffect(() => {
    if (errorMsg) {
      console.error(errorMsg);
    }
  }, [errorMsg]);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleLocate}>
          <View>
            {isLocating ? (
              <Icon name="stop" color="#D34F45" size={250} />
            ) : (
              <Icon name="play" color="#467FD3" size={250} />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.infoContainer}>
          <Text style={styles.innerText}>デバッグ用</Text>
          {errorMsg ? (
            <Text style={styles.errorText}>{errorMsg}</Text>
          ) : null}
          {location ? (
            <View>
              <Text style={styles.innerText}>
                経過時間：{exeTime} {'\n'}
                <View style={styles.table}>
                  <View style={styles.headerRow}>
                    <Text style={styles.headerLabel}>項目</Text>
                    <Text style={styles.headerValue}>GPS情報</Text>
                    <Text style={styles.headerValue}>API送信</Text>
                  </View>
                  {[
                    ['ステータス', isLocating ? '取得中...' : '停止'],
                    ['最終取得', location.lastGetTime ?? '取得中...', sendModel?.lastSendTime ?? '-'],
                    ['緯度', location.latitude ?? '取得中...', sendModel?.latitude ?? '取得中...'],
                    ['経度', location.longitude ?? '取得中...', sendModel?.longitude ?? '取得中...'],
                    ['住所', location.address ?? '取得中...', sendModel?.address ?? '取得中...'],
                    ['間隔', location.elapsedGetTime ?? '取得中...', sendModel?.elapsedSendTime ?? '取得中...'],
                    ['回数', getCount ?? '取得中...', sendCount ?? '取得中...'],
                  ].map(([label, locationValue, sendModelValue], index) => (
                    <View style={styles.row} key={index}>
                      <Text style={styles.label}>{label}</Text>
                      <Text style={styles.value}>{locationValue}</Text>
                      <Text style={styles.value}>{sendModelValue}</Text>
                    </View>
                  ))}
                </View>
                {'\n'}
                端末ID：{sendModel?.mobileId ?? '取得中...'} {'\n'}
                レスポンス：{sendModel?.apiResponse ?? '取得中...'} {'\n'}
              </Text>
            </View>
          ) : (
            <Text>位置情報なし</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    margin: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    margin: 10,
  },
  innerText: {
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 6,
    backgroundColor: '#fff',
  },
  infoContainer: {
    padding: 5,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '20%',
    color: '#333',
    textAlign: 'left',
  },
  headerValue: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '45%',
    color: '#333',
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 12,
    color: '#555',
    fontWeight: 'bold',
    width: '20%',
    textAlign: 'left',
  },
  value: {
    fontSize: 12,
    color: '#333',
    width: '45%',
    textAlign: 'left',
  },
});

export default BusSelect;
