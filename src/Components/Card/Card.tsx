import React, { SyntheticEvent } from 'react';
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }) => {
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
};

export default Card;

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