
Practice React with TypeScript. 

I use flex containers, which are slightly different from the YouTube video and allow me to understand and change webpage styles more easily.

# Reference: 
https://youtu.be/XSLm9PHnkxI?si=Qz3ZB5BVBqt-75p- (a series of YouTube videos)

# If you're seeing errors like “cannot find module” or missing frontend behavior, it’s likely due to: 
 => Build issues (try running npm install and npm run start or npm run dev again)


# A 401 Unauthorized error means your frontend is trying to make a request to a backend or API, but it's not properly authenticated.
 => add a file '.env'
 => add 'REACT_APP_API_KEY=xxxxxxx' in the file '.env'
 => type 'npm start' in terminal 



# npm install --save react-router
# npm install --save react-router-dom
例如，如果您使用的是 React 18，您可以安裝如下版本的 react-router：
# => npm install --save react-router@6.14.0
# => npm install --save react-router-dom@6.14.0

react-router 和 react-router-dom 是用於 React 應用程序的路由庫，幫助開發者在單頁應用程序中管理和處理不同的路由和導航。

react-router：這是主要的路由庫，提供了路由的核心功能。
react-router-dom：這是針對瀏覽器環境的擴展，提供了 DOM 相關的路由組件，如 <BrowserRouter> 和 <Link> 等，專門用於在網頁應用中處理路由。



# npm install --save@types/react-router-dom
# npm install --save@types/react-router
安裝 @types/react-router 和 @types/react-router-dom 的好處，包括類型檢查、自動完成和增強可讀性。

用這個指令查看目前有哪些版本: 
# npm view @types/react-router-dom versions


# 你目前已安裝的 react-router-dom 是 6.14.0，而你查詢到的 @types/react-router-dom 可用版本只有到 5.3.3，這表示：
✅ react-router-dom v6 版本不需要安裝 @types/react-router-dom，因為它已經內建 TypeScript 支援。

# ❌ 不要安裝的版本：你看到的 @types/react-router-dom@5.x 和 @types/react-router-dom@4.x 都是給舊版 react-router-dom 使用的，不適用於 v6，安裝它們會造成型別衝突或錯誤。