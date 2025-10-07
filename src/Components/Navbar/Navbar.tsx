
/* 
CSS flexbox ~

📦 元件簡介:
這是一個網站導覽列（Navbar）元件，包含：
    登入與註冊按鈕
    網站 Logo
    Dashboard 連結
    使用 Tailwind CSS 做排版與樣式設計

    https://www.w3schools.com/css/css3_flexbox_container.asp 
*/

import React from 'react';
import logo from "./logo.png";
import IconBUBU from "./BUBU.jpg";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <div>
      <style>
        {`
          .flex-container {
            display: flex;
            flex-direction: row;
            padding: 1px;
          }
          .flex-container > div {
            width: 350px;
            margin: 10px;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
          }
          .flex-container .right-section {
            display: flex;
            align-items: center;
            margin-left: auto; /* 將右側按鈕推到右邊 */
            gap: 10px; /*讓Signup and Login button之間有間距 */
          }

            .Login-button {
            background-color: #d2e5eaff;
            padding: 1px 20px; /* smaller horizontal padding */
            border-radius: 8px;
            text-decoration: none;
            color: black;
        }

            .Signup-button {
            background-color: #c6f2f4ff;
            padding: 1px 16px; /* smaller horizontal padding */
            border-radius: 8px;
            text-decoration: none;
            color: black;
          }
        `}
      </style>

      <div className="flex-container">

        <div>
          <img src={IconBUBU} alt="BUBU" style={{ height: '90px', marginRight: '8px' }} />
        </div>
                <div>
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '8px' }} />
        </div> 
        <div>
          <a href="#" className="text-black font-bold">Dashboard</a>
        </div>
        <div className="right-section">
          <a href="#" className="Login-button">Login</a>
          <a href="#" className="Signup-button">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// cursor-pointer 是 Tailwind CSS 的一個實用 class，用來設定當滑鼠移到元素上時，游標變成「手指形狀」，表示這個元素是可以點擊的。
// 加上 cursor-pointer 之後，游標會變成手指形狀 👉

/*
這段程式碼其實是將「Logo + Dashboard」放在左側，「Login + Signup」放在右側，但你提到「第一行是 Logo 和 Dashboard，第二行是 Login，第三行是 Signup」，這可能是因為畫面在小螢幕或窄視窗下自動換行了。

📱 為什麼 Login 和 Signup 會跑到下一行？
這通常是因為畫面寬度不足，導致 Flexbox 的兩個子區塊無法並排顯示，系統就會自動將右側的內容換行到下一行。這種情況在手機或窄視窗中很常見。

✅ 如何讓 Login 和 Signup 保持在右側同一行？
你可以考慮以下方式來避免換行：

確保外層容器有足夠寬度，例如使用 w-full 或 min-w-[某個值]。
使用 flex-wrap 控制是否允許換行。
加入響應式設計，例如使用 md:flex 或 lg:flex 來在不同螢幕尺寸下調整排版。



在 MacBook 上開啟這個畫面，卻看到 Login 和 Signup 沒有在右側同一行，可能是以下幾個原因造成的：

🧭 可能原因分析
視窗寬度不足：
即使是 MacBook，如果瀏覽器視窗被縮小（例如不是全螢幕），Flexbox 的左右兩側內容可能會因空間不足而自動換行。
Tailwind 預設不會強制內容不換行，除非你加上 flex-nowrap。
外層容器寬度限制：
你用了 max-w-6xl，這會限制容器最大寬度約為 1536px。如果視窗小於這個寬度，內容就可能擠不下。
mx-auto 只是讓容器置中，並不保證內容不會換行。
內容本身太寬：
Logo 圖片 + Dashboard 文字 + Login + Signup 四個元素加起來可能超過容器寬度，導致右側元素被擠到下一行。


*/
/* 以下是使用 Tailwind CSS */

/*
差異說明：外層容器 vs 內層容器 :

✅ 外層容器（Outer Container）
=> 是最外層的區塊，通常用來控制整個區域的寬度、高度、對齊方式。
=> 它負責包住整個內容結構，並提供整體的排版基礎。

常見用途：
    => 設定最大寬度（如 max-w-7xl）
    => 水平置中（如 mx-auto）
    => 撐滿螢幕高度（如 min-h-screen）


✅ 內層容器（Inner Container）:
=> 是外層容器裡面的子區塊，用來擺放實際內容（文字、圖片、按鈕等）。
=> 它負責排列內容項目，例如左右分佈、垂直堆疊。

常見用途：
    => 使用 flex 排版
    => 控制間距（如 space-x-6、p-4）

對齊內容（如 items-center、justify-between）
*/

/*
🧭 relative 是什麼？
       => relative（相對定位）會讓元素保留原本的位置，但你可以用 top、right 等屬性微調它的位置。最重要的是：
       => 當你在父元素加上 relative，它會成為子元素 absolute 的定位參考點。

✅ 為什麼這樣可以「適應不同頁面」？
因為你可以在每個頁面中設計不同的 relative 容器，讓裡面的 absolute 元素根據該容器定位，而不是整個畫面。

這樣就能做到：
    => 每個頁面都可以有自己的排版邏輯。
    => Signup 和 Login 可以固定在每個頁面的右上角，但不會影響其他區塊。


重點整理：
類別	               功能
relative	       => 設定定位參考點，讓子元素可以根據它定位。
absolute	       => 脫離排版流，根據最近的 relative 元素定位。
top-6 right-6	   => 從上方與右邊各留 24px 的距離。

*/




/*
Tailwind CSS 中沒有 items-right 這個類別。 如果你想讓內容在水平方向靠右，應該使用：

justify-end：水平方向靠右（主軸）

items-end：垂直方向靠下（交叉軸）
*/

/*

import React from 'react';
import logo from "./logo.png";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <nav className="relative min-h-screen bg-white">

      <div className="absolute top-6 right-6 flex items-center space-x-6">
        <div className="text-black hover:text-darkBlue cursor-pointer">Login</div>
        <a
          href="#"
          className="px-6 py-2 font-bold rounded text-white bg-lightGreen hover:opacity-70"
        >
          Signup
        </a>
      </div>


      <div className="flex items-center justify-center h-full">
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="h-10" />
          <a href="#" className="text-black font-bold hover:text-darkBlue">
            Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

*/




/*
import React from 'react';
import logo from "./logo.png";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <nav className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex items-center justify-between w-full max-w-4xl px-4">
     
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="h-10" />
          <a href="#" className="text-black font-bold hover:text-darkBlue">
            Dashboard
          </a>
        </div>

          <div className="flex items-end space-x-6">
          <div className="text-black hover:text-darkBlue">Login</div>
          <a
            href="#"
            className="px-6 py-2 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </a>
        
        </div>
      </div>
    </nav>

  );
};

export default Navbar;

*/





/*
import React from 'react';
import logo from "./logo.png";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="" />
          <div className="hidden font-bold lg:flex">
            <a href="" className="text-black hover:text-darkBlue">
              Dashboard
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkBlue">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/