// React Typescript 2023 - 13. Arrays: https://youtu.be/GOuy-AJjKfs?si=Zqg-59M1TKvbJXoc

// (1) 導入 React 及組件:
//     => 首先，導入了 React 庫，這是創建 React 組件所必需的。
//     => 接著，導入了 CardPortfolio 組件，這個組件將在列表中用來顯示每個投資組合的具體內容。
import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';


// (2) 定義接口 Props:
//     => 定義了一個接口 Props，其中包含一個屬性 portfolioValues，它是一個字符串數組。這個屬性將用來傳遞投資組合的值。
interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void; 
}
  // onPortfolioDelete 是一個函式，它接受一個 SyntheticEvent 類型的參數，但不會回傳任何值。
  // void 是 TypeScript 中的特殊型別，用來表示「沒有回傳值」。
  // 這在事件處理函式中特別常見，例如 onClick、onSubmit 等。
  // React 的事件函式通常只是執行某些操作（例如更新狀態），而不是回傳資料。
  // 所以定義為 => void 是最常見也最安全的做法。


// (3) 創建 ListPortfolio 組件:
//     => 這是一個功能組件，接收 portfolioValues 作為參數，類型為 Props。
const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {

// (4) 返回 JSX:
//     => 組件返回一個 JSX 結構，包含一個標題和一個無序列表（<ul>）。
//     => <h3>My Portfolio</h3>：這是一個標題，表示這是用戶的投資組合。

//     => 無序列表: <ul>：使用無序列表標籤來包裹每個投資組合項目。

//     => 條件渲染與陣列映射: 
//             portfolioValues &&：這個條件確保 portfolioValues 不是 null 或 undefined，只有在有值時才執行後面的 map 函數。

//     => 遍歷投資組合值:(1) portfolioValues.map((portfolioValue) => {...})：使用 map 方法遍歷 portfolioValues 陣列，為每個投資組合值生成一個 CardPortfolio 組件。
//                     (2) return <CardPortfolio portfolioValue={portfolioValue} />;：將當前的 portfolioValue 作為屬性傳遞給 CardPortfolio 組件，以便在該組件內部使用。

// 總結: 通過將 portfolioValue 傳遞給 CardPortfolio 組件，可以在該組件中顯示每個投資組合的具體信息。這種方法使得組件之間的數據傳遞更加清晰，增強了代碼的可讀性和可維護性。這樣，每個 CardPortfolio 可以根據傳入的值渲染出不同的內容，從而實現動態展示。

  return (
    <div>
      <style>
        {`
          .portfolio-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff7e3ff;
            padding: 20px;
          }

          .portfolio-header {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .portfolio-message {
            font-size: 16px;
            margin-bottom: 20px;
            text-align: center;
            max-width: 600px;
          }

          .portfolio-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
        `}
      </style>

      <section id="portfolio" className="portfolio-section">
        <h1 className="portfolio-header">My Portfolio</h1>

        {portfolioValues.length > 0 ? (
          <div className="portfolio-list">
            {portfolioValues.map((portfolioValue) => (
              <CardPortfolio
                key={portfolioValue}
                portfolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
              />
            ))}
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-center">
              Your portfolio is empty.
            </h3>
            <h4 className="portfolio-message">
              Welcome to this page! Please search for information using the search bar. There are no results at the moment.
            </h4>
          </>
        )}
      </section>
    </div>
  );
};

export default ListPortfolio;