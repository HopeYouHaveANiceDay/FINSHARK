// React Typescript 2023 - 13. Arrays: https://youtu.be/GOuy-AJjKfs?si=Zqg-59M1TKvbJXoc


import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
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

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (

    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <p className="pt-6 text-xl font-bold">{portfolioValue}</p>
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio