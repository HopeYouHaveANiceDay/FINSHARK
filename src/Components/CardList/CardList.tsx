import React, { SyntheticEvent } from 'react';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResults: CompanySearch[]; // searchResults：一個公司搜尋結果的陣列。
  onPortfolioCreate: (e: SyntheticEvent) => void;  // onPortfolioCreate：當使用者點擊某個卡片的「加入投資組合」按鈕時，觸發的事件函式。
}

/*
如果 searchResults 有資料，就使用 .map() 將每筆結果渲染成一個 Card 元件。
    id={result.symbol}：傳入公司代碼作為識別。
    key={uuidv4()}：每個卡片都用唯一的 key，避免 React 警告。
    searchResult={result}：將公司資料傳給 Card 元件。
    onPortfolioCreate={onPortfolioCreate}：傳入事件處理函式。
如果沒有搜尋結果，就顯示一段提示文字，告訴使用者如何正確搜尋。
*/

  const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }) => { // CardList 是一個函式型元件，接收 searchResults 和 onPortfolioCreate 作為參數。
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card
            id={result.symbol}
            key={uuidv4()}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <p className="text-center">
          There are no results for your search at the moment. Please enter the correct keywords, such as 'AAPL' or 'TSLA', into the search bar above, then click the Search button or press Enter on your keyboard.</p>
      )}
    </>
  );
};

export default CardList; // 將 CardList 元件作為預設匯出，讓其他檔案可以引用使用它。

/*
import React, { SyntheticEvent } from 'react';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

  const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card
            id={result.symbol}
            key={uuidv4()}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <p className="flex flex-col items-center justify-center py-10">
          Please search for information using the search bar. There are no results at the moment.
        </p>
      )}
    </>
  );
};

export default CardList;
*/



/*
const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card
            id={result.symbol}
            key={uuidv4()}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </>
  );
};

export default CardList;

*/



/*import React, { SyntheticEvent } from 'react';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';
import {v4 as uuidv4} from "uuid";

//✅ 什麼時候可以用 uuidv4()？
// 如果searchResults 是一次性資料（例如 API 回傳後不會變動），或你確定每次渲染都要重新建立元件，那就可以使用 uuidv4()。

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

// based on "Card.tsx" file under Components folder 'Card' folder

const CardList: React.FC<Props> =({ 
  searchResults, 
  onPortfolioCreate
}): => {
  return (
   <>
     { searchResults.length> 0 ? (
        searchResults.map((result) => {
        return (
          <Card 
            id={result.symbol} 
            key={uuidv4()} 
            searchResult={result} 
            onPortfolioCreate={onPortfolioCreate}
          />
      // because the way react reders things 
      // because react ueses the keys in order to re-render the list
    );
  })
  ):(
    <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
      No results!
    </p>
  )}
  </>
  );
};

export default CardList

*/

/*

      <Card companyName="Apple" ticker="AAPL" price={100} />
      <Card companyName="Micrsoft" ticker="MSFT" price={200} />
      <Card companyName="Tesla" ticker="TSLA" price={300} />
      
      */