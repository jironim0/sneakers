import React from "react";
import Card from '../components/Card/index'

const Favorites = ({items, onAddToFavorite}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          Мои Закладки
        </h1>
      </div>

      <div className="d-flex">
      {items
          .map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onAddToFavorite={onAddToFavorite}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
