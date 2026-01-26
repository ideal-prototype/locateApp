
# @line-shuttle/react-native-shuttle

LINE送迎アプリのUIパッケージ（React Native + TypeScript）。
- 画面：位置情報 / 乗降車確認 / 名簿更新
- オフライン前提・外部依存最小
- 既存アプリへ簡易に組み込み可能

## インストール（ローカルで試す）

```sh
yarn add file:./path/to/react-native-shuttle  # または npm i file:./...
```

Monorepoや `npm link` を使う場合は、Metroのシンボリックリンク対応を加えると安定します（`@rnx-kit/metro-resolver-symlinks` など）。
```
```

## 使い方（最小例）

```tsx
import { LocationScreen, BoardingScreen, RosterScreen, ShuttleProvider } from '@line-shuttle/react-native-shuttle';

export default function App(){
  return (
    <ShuttleProvider>
      <LocationScreen />
      {/* 必要に応じてタブ切替やスタックナビと組み合わせて表示 */}
    </ShuttleProvider>
  );
}
```

