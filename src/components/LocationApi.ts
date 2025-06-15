/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-native-get-random-values';
import { LocationType } from './UseLocation';

import { getMobileId, getApiUrl, getApiKey } from './GetStorage';

export interface SendModelType {
  latitude?: number | null;
  longitude?: number | null;
  address?: string | null;
  mobileId?: string | null;
  elapsedSendTime?: string | null;
  lastSendTime?: string | null;
  apiResponse?: string | null;
}

let mobileId: string | null = null;
let apiUrl: string;
let apiKey: string;

export const sendLocationToAPI = async (location: LocationType) => {
  if (!location) {
    console.log('APIに送信する位置情報がありません');
    throw new Error(`APIに送信する位置情報がありません`);
  }

  let errorMsg: string | null = null;
  let sendModel: SendModelType | null = null;

  try {
    mobileId ??= await getMobileId();
    apiUrl ??= await getApiUrl() || '';
    apiKey ??= await getApiKey() || '';

    console.log('apiUrl:' + apiUrl + 'apiKey:' + apiKey + 'mobileId:' + mobileId);

    if (!mobileId) {
      console.log('APIに送信する端末固有IDがありません');
      throw new Error(`APIに送信する端末固有IDがありません`);
    }

    const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    const apiPayload = {
      latitude: location.latitude,
      longitude: location.longitude,
      address: location.address || '取得中...',
      mobileId: mobileId,
      timestamp: timestamp,
    };
    
    const response = await fetch(
      apiUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(apiPayload),
      }
    );

    sendModel = {
      latitude: apiPayload.latitude,
      longitude: apiPayload.longitude,
      address: apiPayload.address,
      mobileId: apiPayload.mobileId,
      lastSendTime: apiPayload.timestamp,
      apiResponse: JSON.stringify(response, null, 2),
    };

    console.log('7:APIへの送信結果:', response.status);

    if (!response.ok) {
      throw new Error(`位置情報の送信に失敗: ${response.status}`);
    }

  } catch (error: any) {
    errorMsg = `${error.message}`;
    throw new Error(`${errorMsg}`);
  }

  return { errorMsg, sendModel };
};
