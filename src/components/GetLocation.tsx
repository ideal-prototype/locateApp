import { useEffect, useState } from "react";
import Location from "expo-location";
import { Geolocation } from '@capacitor/geolocation'

// 現在地の緯度経度情報の型定義
type LocationType = {
  latitude: number | null
  longitude: number | null
  address?: string | null
};

// 現在地を取得するカスタムフック
function GetLocation() {

  const [currentLocation, setCurrentLocation] = useState<LocationType>({
    latitude: null,
    longitude: null,
    address: null,
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {

      // 位置情報を使ってよいかの判定を返す
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      const startTime = performance.now();

      // const location = await Location.getCurrentPositionAsync({});
      // const location = await Location.getLastKnownPositionAsync({});
      const location = await Geolocation.getCurrentPosition()

      const endTime = performance.now();

      console.log(`位置情報取得時間 ${endTime - startTime}`);
      
      setCurrentLocation({
        latitude: location?.coords.latitude ?? null,
        longitude: location?.coords.longitude ?? null,
        address: "ネイティブアプリから送信",
      });
    })();
  }, []);

  return { currentLocation, error };
}

export default GetLocation;
