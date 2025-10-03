
// This part is slightly different from the YouTube video.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { searchCompanies } from './api';

// 建立 React 根節點
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(searchCompanies("tsla"));
// 渲染主應用元件
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 測量效能（可選）
reportWebVitals();




/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { searchCompanies } from './api';


// 建立 React 根節點
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 渲染主應用元件
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 呼叫 API 並印出結果（開發用途）
(async () => {
  try {
    const result = await searchCompanies("tsla");
    console.log("Search result:", result);
  } catch (error) {
    console.error("API error:", error);
  }
})();


// 測量效能（可選）
reportWebVitals();
*/ 











/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { searchCompanies } from './api';

// 建立 React 根節點
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 渲染主應用元件
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 呼叫 API 並印出結果（開發用途）
(async () => {
  try {
    const result = await searchCompanies("tsla");
    console.log("API result:", result); // 輸出查詢結果
  } catch (error) {
    if (error instanceof Error) {
      console.error("API error:", error.message); // 輸出錯誤消息
    } else {
      console.error("Unexpected error:", error); // 輸出其他類型的錯誤
    }
  }
})();

// 測量效能（可選）
reportWebVitals();
*/



/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { searchCompanies } from './api';

// 建立 React 根節點
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 渲染主應用元件
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 呼叫 API 並印出結果（開發用途）
(async () => {
  try {
    const result = await searchCompanies("tsla");
    console.log("API result:", result); // 輸出查詢結果
  } catch (error) {
    console.error("API error:", error);
  }
})();

// 測量效能（可選）
reportWebVitals();

*/
/*
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

(async () => {
  const result = await searchCompanies("tsla");
  console.log(result); // 這裡才是資料本體
})();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

/*
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(searchCompanies("tsla"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
