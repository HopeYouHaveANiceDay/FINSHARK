import React, { ChangeEvent, FormEvent } from 'react';

interface Props {
  onSearchSubmit: (e: FormEvent) => void;
  search: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }) => {
  return (
    <div>
      <style>
        {`
          .flex-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px;
          }

          .search-form {
            display: flex;
            align-items: stretch;
          }

          .search-button {
            background-color: #fbe8f6ff;
            border: 2px solid #f5ccccff;
            padding: 10px 20px;
            border-radius: 0px;
            border: none;
            font-weight: bold;
            color: black;
            cursor: pointer;
            font-size: 12px;
          }

          .search-input {
            padding: 10px;
            /* border: 2px solid #f5ccccff; */
            border-radius: 0px;
            width: 300px;
            font-size: 16px;
          }

          .input-container {
            display: flex;
            align-items: stretch;
          }
        `}
      </style>

      <div className="flex-container">
        <form onSubmit={onSearchSubmit} className="search-form">
          <div className="input-container">
            <input
              id="search-input"
              className="search-input"
              placeholder="Search companies"
              value={search}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
/*
import React, { ChangeEvent, FormEvent } from 'react';

interface Props {
  onSearchSubmit: (e: FormEvent) => void;
  search: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }) => {
  return (
    <div>
      <style>
        {`
 
          .search-button {
            background-color: #f9ddf4;
            align-items: center;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            font-weight: bold;
            color: black;
            cursor: pointer;
          }
            .search-input {
            padding: 10px;
            align-items: center;
            border: 2px solid #ccc;
            border-radius: 5px;
            width: 300px;
            font-size: 16px;
          }


        `}
      </style>

      <div className="flex-container">
       
        <form onSubmit={onSearchSubmit} className="search-form">
          <input
            id="search-input"
            className="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
*/
/*import React, { ChangeEvent, FormEvent } from 'react';

interface Props {
  onSearchSubmit: (e: FormEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}) => {
  return (
    <div>
      <style>
        {`
          .flex-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background-color: #f0f0f0;
            min-height: 100vh;
          }

          .search-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .search-button {
            background-color: #f9ddf4ff;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            color: black;
            cursor: pointer;
          }

          .search-input {
            padding: 10px;
            border: 2px solid #ccc;
            border-radius: 5px;
            width: 300px;
          }
        `}
      </style>

      <div className="flex-container">
        <h2>🔍 Search Companies</h2>

        <form onSubmit={onSearchSubmit} className="search-form">
          <input
            id="search-input"
            className="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
*/