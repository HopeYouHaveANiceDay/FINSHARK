// React Typescript 2023 - 13. Arrays: https://youtu.be/GOuy-AJjKfs?si=Zqg-59M1TKvbJXoc

// 這個元件的用途是：在投資組合清單中顯示每一項投資項目，並提供刪除按鈕。畫面設計簡潔，排版清晰，適合用於卡片式的投資管理介面。
import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';
// what is the difference between 'import DeletePortfolio from '../DeletePortfolio/DeletePortfolio'; ' and 'import DeletePortfolio from './DeletePortfolio'; '?????
/*
這兩行 import 的差異在於路徑的相對位置:

📌 import DeletePortfolio from './DeletePortfolio';
./ 表示目前這個檔案所在的資料夾。
所以這行會去找「跟目前檔案在同一層的 DeletePortfolio.tsx 或 .js 檔案」。
✅ 適用情境：CardPortfolio.tsx 和 DeletePortfolio.tsx 在同一個資料夾裡。

📌 import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
../ 表示上一層資料夾。
這行會去找「上一層資料夾中的 DeletePortfolio 資料夾，再進入該資料夾中的 DeletePortfolio.tsx」。
✅ 適用情境：CardPortfolio.tsx 在 Components/Portfolio/CardPortfolio/，而 DeletePortfolio.tsx 在 Components/Portfolio/DeletePortfolio/。


在 CardPortfolio.tsx 中：
如果寫 ./DeletePortfolio → ❌ 錯誤，因為 DeletePortfolio.tsx 不在同一層。
應該寫 ../DeletePortfolio/DeletePortfolio → ✅ 正確。
*/

interface Props {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}
// portfolioValue：代表投資組合中的某一項目，例如股票代號或名稱。
// onPortfolioDelete：當使用者點擊刪除按鈕時要執行的事件函式。


// 這是一個函式型元件，透過解構方式接收 portfolioValue 和 onPortfolioDelete 兩個 props。
// .portfolio-item 是外層容器，使用 Flex 垂直排列，並加上邊框、圓角、陰影與背景色。
// .portfolio-text 是投資項目的文字樣式，置中顯示、加粗。
// DeletePortfolio 是刪除按鈕元件，放在卡片底部。
const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    // ✅ 解決方法：讓文字在卡片內自動換行、不溢出
    // 請確認你在 CardPortfolio.tsx 中的 .portfolio-text 和 .portfolio-item CSS 有以下設定


/*
✅ 建議使用時機：
如果你只是要顯示公司名稱和代碼 → 用 <span>
如果你希望點擊後跳轉到該公司的詳細頁面 → 用 <Link>
*/
    <> 
      <style>
        {`
          .portfolio-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #5997c3ff;
            border-radius: 10px;
            padding: 0px;
            margin-bottom: 1px;
            background-color: #fcfffeff; /* = ListPortfolio*/
            /*box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);*/
            width: 100px; /* Avoid width: 100% unless the parent container is tightly controlled.*/
            max-height: 130px;
            box-sizing: border-box;
            overflow: hidden;
            word-break: break-word;      /* ✅ 強制長字斷行 */            
          }
          .portfolio-text {
            font-size: 18px;
            font-weight: bold;
            color: #4d6573ff;
            margin-bottom: 0px;
            text-align: center;
            word-wrap: break-word;   /* ✅ Wrap long words 讓長字自動換行 */
            overflow-wrap: break-word;   /* ✅ Modern alternative 現代瀏覽器支援  */
            white-space: normal;   /* ✅ Allow line breaks 允許換行 */
            max-width: 100%;  /* ✅ 限制寬度不超出容器 */ ..... 使用 <p> 包住文字: <p className="portfolio-text">
          }
        `}    
      </style>

    <div className="portfolio-item">
      <Link to={`/company/${portfolioValue}`} className="portfolio-text"> 
        {portfolioValue}
      </Link> 

      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
    
    </>
  );
};

export default CardPortfolio;
