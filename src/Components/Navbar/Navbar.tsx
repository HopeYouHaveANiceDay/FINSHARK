


import React from 'react';
import logo from "./logo.png";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <nav className="bg-white px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* 左側：Logo + Dashboard */}
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="h-10" />
          <a href="#" className="text-black font-bold hover:text-darkBlue">
            Dashboard
          </a>
        </div>

        {/* 右側：Login + Signup */}
        <div className="flex items-end space-x-6">
          <div className="text-black hover:text-darkBlue cursor-pointer">Login</div>
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