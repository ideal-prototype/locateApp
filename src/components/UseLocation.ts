import { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import { sendLocationToAPI, SendModelType } from './LocationApi';

export interface LocationType {
  latitude?: number | null;
  longitude?: number | null;
  address?: string | null;
  elapsedGetTime?: string | null;
  lastGetTime?: string | null;
}

export const UseLocation = (isLocating: boolean) => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [sendModel, setSendModel] = useState<SendModelType | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [elapsedSendStartTime, setElapsedSendStartTime] = useState<number>(0);
  const [getCount, setGetCount] = useState(0);
  const [sendCount, setSendCount] = useState(0);
  const [exeTime, setExeTime] = useState("0.000");
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  const updateExeTime = () => {
    if (startTimeRef.current !== null) {
      const time = (performance.now() - startTimeRef.current) / 1000;
      setExeTime(time.toFixed(3));
      frameRef.current = requestAnimationFrame(updateExeTime); // 次のフレームで再度更新
    }
  };

  useEffect(() => {

    console.log('3:UseLocation:useEffect');

    const getAddressFromCoords = async (latitude: number, longitude: number) => {
      try {
        const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });
        return address
          ? `${address.postalCode || ''} ${address.region || ''} ${address.city || ''} ${address.district || ''} ${address.street || ''}`
          : '取得中...';
      } catch (error) {
        console.error('住所の取得に失敗:', error);
        return '取得失敗';
      }
    };

    let watchSubscription: Location.LocationSubscription | null = null;

    const startWatchingLocation = async () => {

      console.log('4:startWatchingLocation');
      let elapsedStartTime = performance.now();

      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('位置情報の取得が許可されていません');
          return;
        }

        watchSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 5000,
            distanceInterval: 1,
          },
          async (position) => {
            const { latitude, longitude } = position.coords;
            const address = await getAddressFromCoords(latitude, longitude);

            const endTime = performance.now();
            const elapsedGetTime = ((endTime - elapsedStartTime) / 1000).toFixed(3)
            elapsedStartTime = performance.now();

            console.log(`5:取得間隔 ${elapsedGetTime}`);

            setGetCount((prev) => prev + 1);
            setLocation((prevLocation) => {
              const updatedLocation = {
                ...prevLocation,
                address,
                latitude,
                longitude,
                elapsedGetTime,
                lastGetTime: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
              };
            
              console.log('6:location:', JSON.stringify(updatedLocation, null, 2));
              return updatedLocation;
            });
          }
        );
      } catch (error: any) {
        setErrorMsg(error.message);
      }
    };

    console.log('8:isLocating:', isLocating);

    if (isLocating) {
      startWatchingLocation();

      setGetCount(0);
      setSendCount(0);
      setExeTime('0');
      setElapsedSendStartTime(performance.now());
      startTimeRef.current = performance.now();
      frameRef.current = requestAnimationFrame(updateExeTime);
    } else {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      startTimeRef.current = null;
    }

    return () => {
      if (watchSubscription) watchSubscription.remove();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isLocating]);

  useEffect(() => {
    if (location && isLocating) {
      sendLocationToAPI(location)
        .then((response) => {
          setSendCount((prev) => prev + 1);
          setErrorMsg(null);
          setSendModel(() => {
            const updatedSendModel = {
              address: response?.sendModel?.address,
              latitude: response?.sendModel?.latitude,
              longitude: response?.sendModel?.longitude,
              elapsedSendTime: '取得中',
              lastSendTime: response?.sendModel?.lastSendTime,
              mobileId: response?.sendModel?.mobileId,
              apiResponse: response?.sendModel?.apiResponse,
            };
            
            return updatedSendModel;
          });
        })
        .catch((error) => {
          console.error('API呼出失敗:', error.message);
          setErrorMsg(error.message);
        })
        .finally(() => {
          const endTime = performance.now();
          const elapsedSendTime = ((endTime - elapsedSendStartTime) / 1000).toFixed(3)
          setElapsedSendStartTime(performance.now());
          setSendModel((prevSendModel) => {
            const updatedSendModel = {
              ...prevSendModel,
              elapsedSendTime: elapsedSendTime,
            };
          
            console.log('10:API送信結果:', JSON.stringify(updatedSendModel, null, 2));
            return updatedSendModel;
          });
        });
    }
  }, [location]);

  return { location, errorMsg, getCount, sendCount, exeTime, sendModel };
};
