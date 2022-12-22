import React from "react";
import Card from '../components/Card/index'

const Home = ({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="">
          {searchValue ? `Поиск по запросу: ${searchValue}` : "All bots"}
        </h1>
        <div className="search-block">
          <img width={30} height={30} src="/img/search.png"></img>
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/remove.png"
              alt="cloze"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          ></input>
        </div>
      </div>

      <div className="d-flex">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
