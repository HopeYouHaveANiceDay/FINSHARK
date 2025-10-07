import React, { SyntheticEvent } from 'react';
import "./Card.css"; // 引入卡片的樣式檔案
import { CompanySearch } from '../../company'; // 引入公司搜尋結果的資料型別
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio'; // 引入「加入投資組合」的功能元件

interface Props {
  id: string;  // 卡片的唯一識別碼
  searchResult: CompanySearch;   // 公司搜尋結果的資料物件
  onPortfolioCreate: (e: SyntheticEvent) => void; // 點擊加入投資組合時觸發的事件函式
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }) => {
  return (
    <>
      <style>
        {`
          .card-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #f6d7d7;
            background-color: #fff;
            flex-wrap: wrap;
          }

          .card-column {
            flex: 1;
            min-width: 150px;
            font-size: 15px;
            color: #030303ff;
            font-weight: 500;
          }

          .card-row span:last-child {
            margin-right: auto; /* 確保最後一列的間距 */
          }
        `}
      </style>

      <div className="card-row" key={id} id={id}>
        <span className="card-column">{searchResult.name} ({searchResult.symbol})</span>
        <span className="card-column">{searchResult.currency}</span>
        <span className="card-column">
          {searchResult.exchangeShortName && searchResult.stockExchange 
            ? `${searchResult.exchangeShortName} - ${searchResult.stockExchange}` 
            : ''}
        </span>
        <span className="card-column">
          <AddPortfolio
            onPortfolioCreate={onPortfolioCreate}
            symbol={searchResult.symbol}
          />
        </span>
      </div>
    </>
  );
};

export default Card; // 將 Card 元件作為預設匯出

/* 
import React, { SyntheticEvent } from 'react';
import "./Card.css"
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';


interface Props{
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}


const Card: React.FC<Props> = ({ 
    id, 
    searchResult, 
    onPortfolioCreate,
 }PProt:) : JSX.Element  => {
    return (
        <div
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
            key={id}
            id={id}
        >
            <h2 className="font-bold text-center text-black md:text-left">
                {searchResult.name} ({searchResult.symbol})
            </h2>
            <p className="text-black">{searchResult.currency}</p>
            <p className="font-bold text-black">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
            <AddPortfolio
                onPortfolioCreate={onPortfolioCreate}
                symbol={searchResult.symbol}
            />
        </div>
    );
}

export default Card

*/




// when we get stocks back from the API, we need to add them to the portfolio
/*
interface Props{
    companyName: string;
    ticker: string;
    price: number;
}
*/

// React.FC是一個代表React功能元件的TypeScript型別。 這是一種通用型別，允許您指定功能元件將接收的預期props（屬性）。 
// Props 類型的屬性通常是指組件所需的屬性（props）的定義。這些屬性用來傳遞數據到 React 組件中。
// 這個 Props 接口定義了三個屬性：companyName, ticker, price

/*
function Card({ companyName, ticker, price }: Props): JSX.Element {
    return <div className="card">
        <img
            src="http://images.unsplash.com/photo-1612428978260-2b9c7df20150?ix1"
            alt="Image" />
        <div className="details">
            <h2>
                {companyName} ({ticker})
            </h2>
            <p>${price}</p>
        </div>
        <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, distinctio.
        </p>
    </div>;

}

export default Card
*/