// React：引入 React 庫。
// ChangeEvent：用於處理變更事件的類型。
// JSX：表示 JSX 元素的類型。
// SyntheticEvent：表示 React 合成事件的類型。
// useState：React 的狀態鉤子，用於在函數組件中管理狀態。
import React, { ChangeEvent, FormEvent } from 'react'

// 定義屬性類型: 定義一個空的 Props 類型，表示這個組件不接受任何屬性。
// change "type props" to "interface Props", this is going to be a synthetic event, not going to form event.
// 本質上，合成事件是原生事件的規範化、跨瀏覽器相容的包裝器，而原生事件在不同瀏覽器之間通常不一致。這確保了您的應用程式無論在哪個瀏覽器或平台上運行都能按預期運行。
// In React, a 'form event' refers to an action that occurs on a form or a form element, such as onChange (when the value of an input changes), onBlur (when an element loses focus), onFocus (when an element gains focus), or onSubmit (when a form is submitted).
// A 'SyntheticEvent' is React's cross-browser wrapper around the browser's native event. When an event, such as a form event, is triggered in a React component, React wraps the native browser event into a SyntheticEvent object. This object provides a consistent interface and behavior across different browsers, ensuring that your event handling logic works uniformly regardless of the browser or platform. 
interface Props {
    onSearchSubmit: (e: FormEvent) => void; // return void: because react is functional, react does not want you tiuching outside state only in certain circumstances
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

//  定義 Search 組件: 定義一個名為 Search 的函數組件，使用 React.FC<Props> 聲明這是一個函數組件，並指定返回類型為 JSX.Element。
/* const Search : React.FC<Props> = (props: Props): JSX.Element => {
    
    // 使用 useState 鉤子來定義一個狀態變量 search，初始值為空字符串，類型為 string。
    const [search, setSearch] = useState<string>("");

    // 處理輸入變更: 
    // 定義一個 handleChange 函數，當輸入框內容變更時觸發。
    // 使用 ChangeEvent<HTMLInputElement> 來指定事件類型，並通過 setSearch 更新狀態 search。
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };


    // 處理按鈕點擊:
    // 定義一個 onClick 函數，當按鈕被點擊時觸發，並打印事件對象。
    const onClick = (e: SyntheticEvent) => {
        console.log(e);
    };
*/
    //  返回 JSX 結構:
    // 返回一個包含 input 和 button 的 div 元素。
    // input 的值綁定到 search，並在內容變更時調用 handleChange。
    // 當按鈕被點擊時，調用 onClick。

    // set up props => props can be communicated through the params.
    // If you don't set up your props, none of this is going to be passed down 
    // and props control also where things go in the HTML
const Search: React.FC<Props> = ({
    onSearchSubmit, 
    search, 
    handleSearchChange,
}) => {

// ❌ 2. : Props 不需要重複標註 => }: Props) => {
// 已經使用 React.FC<Props>，不需要再在參數後面加 : Props。

//❌ 4. SyntheticEvent 沒有使用，可移除
// 匯入了 SyntheticEvent，但在這個元件中沒有使用它，可以移除。


    return (  // 回傳 JSX 結構：這是 React 元件的回傳部分，會渲染畫面上的 HTML 結構。
    <section className="relative bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 space-y-6">

    {/* 🔍 測試文字區塊 */}
    <div className="bg-yellow-300 text-black p-4 rounded">

    </div>

        <form
          className="form flex flex-col items-center justify-center w-full p-10 space-y-4 bg-darkBlue rounded-lg"
          onSubmit={onSearchSubmit}
        >
          <input
            className="w-full max-w-md p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  );
};

// 匯出組件:
// 匯出 Search 組件，以便在其他地方使用。
export default Search


/*

import React, { ChangeEvent, FormEvent } from 'react'
interface Props {
    onSearchSubmit: (e: FormEvent) => void; // return void: because react is functional, react does not want you tiuching outside state only in certain circumstances
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({
    onSearchSubmit, 
    search, 
    handleSearchChange,
}) => {



    return (  
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">


    <div className="bg-yellow-300 text-black p-4 rounded">

    </div>

        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  );
};
export default Search

*/