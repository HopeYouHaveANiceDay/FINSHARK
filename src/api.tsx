
// This part is slightly different from the YouTube video.
import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {

    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
};

/*
axios 是一個基於 Promise 的 JavaScript HTTP 客戶端，通常用於在瀏覽器和 Node.js 環境中進行 HTTP 請求。它的主要特點包括：

主要特點

基於 Promise：
axios 使用 Promise 來處理異步操作，使得代碼更加簡潔和易於維護。

簡單易用的 API：
提供了簡單的 API 來發送 GET、POST、PUT、DELETE 等請求。

支持請求和響應攔截器：
可以在請求發送之前或響應到達之後進行處理，比如添加認證標頭或處理錯誤。

自動轉換 JSON 數據：
axios 會自動將 HTTP 響應的 JSON 數據轉換為 JavaScript 對象。

支持取消請求：
可以輕鬆地取消請求，以防不必要的請求繼續進行。

支持防止 CSRF 攻擊：
可以輕鬆地設置 CSRF 防護標頭。

*/





/*
still have problems!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ""
import axios from "axios"
import {CompanySearch} from "./company";

interface SearchResponse {
  data: CompanySearch[];
}


export const searchCompanies = async (query: string) => {
  try {
    const data =await axios.get<SearchResponse>(
      https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY} 
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
    
  }
};
" Property 'isAxiosError' does not exit on type 'AxiosStatic'. ts(2339) [Ln 18, Col15]. 'error' is of type 'unknown'. ts(18046) [Ln 19, col 38]. 'error' is of type 'unknown'. ts(18046) [Ln 20, Col 14]*/















/*
import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string): Promise<CompanySearch[] | string> => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );

    console.log(response.data); // 印出 API 回傳的公司資料陣列
    return response.data.data;

  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};
*/







 

/*
看到的 [[PromiseResult]]: undefined，雖然 api.tsx 的 searchCompanies("tsla") 已經成功取得資料並在 console.log(response.data) 印出 4 筆公司資料，
但在 index.tsx 中卻出現 Promise fulfilled 而結果是 undefined，這是因為你在 console.log(searchCompanies("tsla")) 中沒有正確處理 Promise 的結果。


為什麼 [[PromiseResult]]: undefined????

✅ searchCompanies("tsla") 是一個 async 函式
=> 它會回傳一個 Promise，而不是直接的資料。

❌ 寫的是：console.log(searchCompanies("tsla"));
=>  這樣只會印出 Promise 本身，而不是它的結果。
    這個 Promise 最終會「完成」（fulfilled），但你沒有使用 await 或 .then() 去接收它的結果，
    所以 console.log() 印出的是 Promise，而不是資料。

✅ 正確的寫法是：
(1)
searchCompanies("tsla").then((result) => {
  console.log(result); // 這裡才是資料本體
});


(2) 或用 async/await 包起來：
(async () => {
  const result = await searchCompanies("tsla");
  console.log(result); // 這裡才是資料本體
})();


✅ 為什麼 api.tsx 的 console.log(response.data) 有資料？
因為你在 searchCompanies 函式內部有這行：console.log(response.data);
=> 這是在函式執行過程中印出資料，與你在 index.tsx 中的 console.log(searchCompanies(...)) 是不同層級的印出。

總結:
(1) api.tsx	=> response.data => 在函式內部直接印出 API 回傳資料 ✅
(2) index.tsx => searchCompanies(...) => 印出的是 Promise，沒有接收結果 ❌
*/


/*
interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string): Promise<CompanySearch[] | string> => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    console.log("API 回傳資料：", response.data);
    return response.data.data;

  } catch (error) {
    if (error instanceof Error) {
      console.log("錯誤訊息：", error.message);
      return error.message;
    } else {
      console.log("非預期錯誤：", error);
      return "An unexpected error has occurred.";
    }
  }
};
*/

/*
interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string): Promise<CompanySearch[] | string> => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );

    console.log(response.data); // 印出 API 回傳的公司資料陣列

    // 檢查是否有資料
    if (!response.data.data || response.data.data.length === 0) {
      return "No companies found for the search query.";
    }

    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};
*/

/*
Error: Promise[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Object

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
    


  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};
*/

/*
export const searchCompanies = async (query: string): Promise<CompanySearch[] | string> => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};
*/