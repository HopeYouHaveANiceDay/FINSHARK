import React from 'react';
import hero from "./hero.png";
import { Link } from 'react-router-dom';


interface Props {}

const Hero: React.FC<Props> = (props: Props) => {
  return (
  <>
    <style>
      {`
        .flex-container 
        {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }

        .text-content  
        {
          flex-direction : column;
          flex: 1;
          padding: 20px;
        }

        .text-content-1 
        {
          margin-top: -150px; /* ✅ 向上移動 */
          color: #3e5960ff;
          font-size: 22px;
          
        }
        
        .text-content-2 
        {
          color: #4c6779ff;
          font-size: 18px;
        }

          .image-content {
            flex: 1;
            padding: 20px;
            margin-left: -130px; /* 向左移動的調整 , 向左移動更多 */
          }

          .image-content img {
            max-width: 40%;   /* 明確設定寬度 : 圖片最大寬度為容器的 40%，這樣可以讓圖片縮小但仍保持比例。 */
            height: auto;     /* 保持原始比例 : 根據寬度自動調整高度，保持原始比例。*/
          }
          
      .GetStart-button {
        background-color: #b6e8f5ff;
        padding: 5px 10px; /* smaller horizontal padding */
        border-radius: 8px;
        text-decoration: none;
        color: #313f42ff;
        font-size: 20px;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }
      .GetStart-button:hover {
        background-color: #c2e6f5ff;
        cursor: pointer;
      }
    `}
  </style>

    <section id="hero" className="flex-container">
      <div className="text-content">
          <h1 className="text-content-1"> 
            Financial data with no news.
          </h1>
          <p className="text-content-2"> 
            Search relevant financial documents without fear mongering and fake
            news.
          </p>

            <Link
              to="/search"
              className="GetStart-button">
              Get Started
            </Link>
          </div>

        <div className="image-content">
          <img src={hero} alt="Hero" />
        </div>

    </section>
    </>
  );
};

export default Hero;

/*
import React from 'react';
import hero from "./hero.png";


interface Props {}

const Hero: React.FC<Props> = (props: Props) => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Financial data with no news.
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href=""
              className="py-5 px-10 text-2xl font-bold text-white bg-lightGreen rounded lg:py-4 hover:opacity-70"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
*/