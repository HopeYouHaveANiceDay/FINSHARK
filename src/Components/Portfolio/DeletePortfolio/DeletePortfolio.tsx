import React, { SyntheticEvent } from 'react';

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void; // 刪除投資組合的事件處理函式
    portfolioValue: string; // 投資組合的值
}

const DeletePortfolio: React.FC<Props> = ({ onPortfolioDelete, portfolioValue }) => {
    return (
        <div>
            <style>
                {`
                  
                    .delete-button {
                        width: 100%; /* 使按鈕寬度為 100% */
                        padding: 5px 10px; /* ✅ 高度變矮，左右寬度保持 */    /* padding: 15px; 垂直內邊距 */
                        color: white; /* 字體顏色 */
                        border: none; /* 邊框顏色 , 您可以選擇移除邊框（border: none;），或設置為具體的樣式，例如 border: 2px solid transparent; 來保持佈局的一致性。*/
                        background-color: #c2dbdfff; /* 按鈕背景顏色 */
                        border-radius: 5px; /* 圓角 */

                    }
                `}
            </style>

            <div className="portfolio-section">
                <form onSubmit={onPortfolioDelete}>
                    <input type="hidden" value={portfolioValue} /> {/* 隱藏輸入框，用於傳遞投資組合值 */}
                    <button type="submit" className="delete-button"> {/* 設置按鈕為提交類型 */}
                        X
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DeletePortfolio; // 將組件導出

/*
import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (

    <div>
      <style>
        {`
          .portfolio-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff7efff;
            padding: 20px;
          }

    <div>
        <form onSubmit={onPortfolioDelete}> 
            <input hidden={true} value={portfolioValue} />

        <button className=""portfolio-section" // block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
        </form>
    </div>
  );
};

export default DeletePortfolio

*/