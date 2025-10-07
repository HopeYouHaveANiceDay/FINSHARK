// 主要功能是提供一個「加入投資組合」的按鈕，當使用者點擊後會觸發事件並提交該股票代號

import React, { SyntheticEvent } from "react";
// 匯入 React 主函式庫。
// SyntheticEvent 是 React 的合成事件型別，用於事件處理（例如表單提交）。


interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}
// onPortfolioCreate：當使用者點擊「Add」按鈕時要執行的事件函式。
// symbol：股票代號，例如 "AAPL"、"TSLA"。


// 這是一個函式型元件，接收 onPortfolioCreate 和 symbol 作為參數。
const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button
          type="submit"
          className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
    );
};

export default AddPortfolio