import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

/*
in 'reportWebVitals.ts':
這個錯誤訊息：
❌ Cannot find module 'web-vitals' or its corresponding type declarations. ts(2307)
表示 TypeScript 找不到要匯入的 web-vitals 模組，可能原因如下：

🧰 解決方法
1️⃣ 安裝 web-vitals 套件
請在專案根目錄執行以下指令來安裝：
# npm install web-vitals


使用 React 18.2.0 時，不需要安裝與 React 相同版本號的 web-vitals。這兩個套件是獨立的，web-vitals 是由 Google 提供的性能監測工具，與 React 沒有直接的版本綁定。

✅ 建議版本
根據目前的社群使用情況與官方範例，web-vitals@^2.1.4 是與 React 18.2.0 相容且穩定的版本。你可以這樣安裝：
# npm install web-vitals@^2.1.4

📌 額外提醒
web-vitals 是獨立的工具，不會影響 React 的功能。
安裝後可以在 reportWebVitals.ts 中使用它來收集性能數據。
若你使用的是 create-react-app，它通常已經包含 reportWebVitals.ts 的範例。
*/