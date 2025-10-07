import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {

  // we need to pass down the handle click and what that entails is just making props for it
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  // we need to have a piece of state to store the search results.
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setserverError] = useState<string | null>(null);
    // 處理輸入變更: 
    // 定義一個 handleChange 函數，當輸入框內容變更時觸發。
    // 使用 ChangeEvent<HTMLInputElement> 來指定事件類型，並通過 setSearch 更新狀態 search。
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value); 
    };

    const onPortfolioCreate = (e: any) => {
      e.preventDefault(); // 阻止表單的預設提交行為。
      const inputValue = e.target[0].value;  // 取得使用者輸入的值（假設是表單的第一個欄位）。
      // 這段程式碼中加入 const inputValue = e.target[0].value; 是為了先取得使用者輸入的值，並儲存在一個變數中，這樣可以讓後續的邏輯更清晰、更容易維護。
      // 取得表單中第一個輸入欄位的值 e.target[0] 代表表單中的第一個元素（通常是 <input>），而 .value 則是該欄位的輸入內容。
      // 避免重複存取 DOM 結構 如果在 find 或其他邏輯中直接寫 e.target[0].value，會讓程式碼變得冗長且難以閱讀。透過變數 inputValue，可以簡化後續的邏輯。
      // 提升可讀性與可維護性 把輸入值抽出來命名為 inputValue，讓程式碼語意更清楚，也方便日後除錯或修改。

      const exists = portfolioValues.find((value) => value === inputValue); // 使用 find 方法檢查這個值是否已存在於 portfolioValues 陣列中。這裡要用括號包住箭頭函式 (value) => ...，否則會造成語法錯誤。
      if (exists) return;  // 如果已存在，就不做任何事，直接返回。
      const updatedPortfolio = [...portfolioValues, e.target[0].value] // 把新值加入原本的陣列中，形成新的陣列。
      setPortfolioValues(updatedPortfolio);  // 更新狀態，儲存新的投資組合資料。
    }


    const onPortfolioDelete = (e: any) => {   // 定義一個名為 onPortfolioDelete 的函式，參數 e 是事件物件（例如表單提交事件）。
      e.preventDefault(); // 阻止表單的預設提交行為，避免頁面重新整理。

      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      // 使用 filter 方法，從 portfolioValues 陣列中移除與輸入值相同的項目。
      //    => e.target[0].value 是表單中第一個欄位的值（要刪除的項目）。
      //    => filter 會保留所有不等於該值的項目，形成新的陣列 removed。

      setPortfolioValues(removed); // 更新狀態，把新的陣列 removed 設定為目前的投資組合。
    };


    // 處理按鈕點擊:
    // 定義一個 onClick 函數，當按鈕被點擊時觸發，並打印事件對象。
    // 使用 e.preventDefault(); 可以讓你控制表單提交的行為，避免頁面重載，從而使你能夠在提交表單時進行異步操作（例如發送請求到伺服器來搜索公司）。這樣的設計在單頁應用程式（SPA）中非常常見，可以提升用戶體驗
    
        const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();        // 阻止默認的表單提交行為
        
         if (!search.trim()) {
            alert("Please enter the correct keywords, such as 'AAPL' or 'TSLA', into the search bar above, then click the Search button or press Enter on your keyboard.");
            return;
          };


        const result = await searchCompanies(search); //這行是呼叫後端 API 來搜尋公司資料，並等待結果回傳。searchCompanies 是一個非同步函式，會根據使用者輸入的關鍵字（例如 "AAPL"）去查詢資料。
        if(typeof result === "string") { // 如果回傳的 result 是一個字串，代表這是一個錯誤訊息（例如伺服器錯誤、找不到資料等），就用 setserverError(result) 把錯誤訊息儲存起來，讓畫面可以顯示錯誤。
          setserverError(result);   // 如果結果是錯誤訊息，設置伺服器錯誤狀態
        } else if(Array.isArray(result.data)) { // 如果 result.data 是一個陣列，代表搜尋成功並取得公司資料，就用 setSearchResult(result.data) 把結果儲存起來，讓畫面可以顯示這些公司卡片。
          setSearchResult(result.data);     // 如果結果是數據數組，設置搜索結果
        }
        console.log(searchResult);   // 輸出當前的搜索結果
        };
        /* 
           ✅ 為什麼這段很重要？
                  它讓你的程式能夠根據 API 回傳的不同格式（錯誤或資料）做出正確的處理。
                  避免程式崩潰或顯示錯誤畫面。
                  提升使用者體驗，讓使用者知道搜尋是否成功。
        */
                        
  return (
    <div className="App">
      <Navbar />
      <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange}
      />    
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate}/> {serverError && <h1>{serverError}</h1>}
      
    </div>
  );
}

export default App;
function value(value: string, index: number, obj: string[]): value is string {
  throw new Error('Function not implemented.');
}





/* 
⚠️ 建議修正與優化
❌ 1. SyntheticEvent 應改為 FormEvent
你在 onSearchSubmit 使用了 SyntheticEvent，但其實這是表單提交事件，應使用更精確的型別：
ts
const onSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
這樣 TypeScript 能更準確地推斷 e.currentTarget 的型別。
❌ 2. onPortfolioCreate 與 onPortfolioDelete 使用 any
這會失去型別保護，建議改為：
ts
const onPortfolioCreate = (e: FormEvent<HTMLFormElement>) => { ... }
const onPortfolioDelete = (e: FormEvent<HTMLFormElement>) => { ... }
❌ 3. e.target[0].value 不安全
這種寫法依賴 DOM 結構，容易出錯。建議改為：
ts
const inputValue = (e.currentTarget.elements[0] as HTMLInputElement).value;
這樣型別更安全，也更清楚。
❌ 4. 多餘的 function value(...) 應刪除
這段是 TypeScript 自動產生的樣板，沒有使用，可以安全刪除：
ts
function value(value: string, index: number, obj: string[]): value is string {
  throw new Error('Function not implemented.');
}
❌ 5. Hero 元件已引入但未使用
你引入了：
ts
import Hero from './Components/Hero/Hero';
但在 return 中沒有使用它。如果你不打算用它，建議移除；如果要用，請加上：
tsx
<Hero />
*/






/*
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {

  // we need to pass down the handle click and what that entails is just making props for it
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  // we need to have a piece of state to store the search results.
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setserverError] = useState<string | null>(null);
    // 處理輸入變更: 
    // 定義一個 handleChange 函數，當輸入框內容變更時觸發。
    // 使用 ChangeEvent<HTMLInputElement> 來指定事件類型，並通過 setSearch 更新狀態 search。
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value); 
    };

    const onPortfolioCreate = (e: any) => {
      e.preventDefault(); // 阻止表單的預設提交行為。
      const inputValue = e.target[0].value;  // 取得使用者輸入的值（假設是表單的第一個欄位）。
      // 這段程式碼中加入 const inputValue = e.target[0].value; 是為了先取得使用者輸入的值，並儲存在一個變數中，這樣可以讓後續的邏輯更清晰、更容易維護。
      // 取得表單中第一個輸入欄位的值 e.target[0] 代表表單中的第一個元素（通常是 <input>），而 .value 則是該欄位的輸入內容。
      // 避免重複存取 DOM 結構 如果你在 find 或其他邏輯中直接寫 e.target[0].value，會讓程式碼變得冗長且難以閱讀。透過變數 inputValue，可以簡化後續的邏輯。
      // 提升可讀性與可維護性 把輸入值抽出來命名為 inputValue，讓程式碼語意更清楚，也方便日後除錯或修改。

      const exists = portfolioValues.find((value) => value === inputValue); // 使用 find 方法檢查這個值是否已存在於 portfolioValues 陣列中。這裡要用括號包住箭頭函式 (value) => ...，否則會造成語法錯誤。
      if (exists) return;  // 如果已存在，就不做任何事，直接返回。
      const updatedPortfolio = [...portfolioValues, e.target[0].value] // 把新值加入原本的陣列中，形成新的陣列。
      setPortfolioValues(updatedPortfolio);  // 更新狀態，儲存新的投資組合資料。
    }


    const onPortfolioDelete = (e: any) => {   // 定義一個名為 onPortfolioDelete 的函式，參數 e 是事件物件（例如表單提交事件）。
      e.preventDefault(); // 阻止表單的預設提交行為，避免頁面重新整理。

      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      // 使用 filter 方法，從 portfolioValues 陣列中移除與輸入值相同的項目。
      //    => e.target[0].value 是表單中第一個欄位的值（要刪除的項目）。
      //    => filter 會保留所有不等於該值的項目，形成新的陣列 removed。

      setPortfolioValues(removed); // 更新狀態，把新的陣列 removed 設定為目前的投資組合。
    };


    // 處理按鈕點擊:
    // 定義一個 onClick 函數，當按鈕被點擊時觸發，並打印事件對象。
    // 使用 e.preventDefault(); 可以讓你控制表單提交的行為，避免頁面重載，從而使你能夠在提交表單時進行異步操作（例如發送請求到伺服器來搜索公司）。這樣的設計在單頁應用程式（SPA）中非常常見，可以提升用戶體驗
    const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();        // 阻止默認的表單提交行為
        const result = await searchCompanies(search);   // 進行搜索
        if(typeof result === "string") {
          setserverError(result);   // 如果結果是錯誤訊息，設置伺服器錯誤狀態
        } else if(Array.isArray(result.data)) {
          setSearchResult(result.data);     // 如果結果是數據數組，設置搜索結果
        }
        console.log(searchResult);   // 輸出當前的搜索結果
    };

  return (
    <div className="App">
      <Navbar />
      <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange}
      />    
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate}/> {serverError && <h1>{serverError}</h1>}
      
    </div>
  );
}

export default App;
function value(value: string, index: number, obj: string[]): value is string {
  throw new Error('Function not implemented.');
}

*/