import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

let App = (props) => {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://63375f02132b46ee0be0d964.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://63375f02132b46ee0be0d964.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://63375f02132b46ee0be0d964.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://63375f02132b46ee0be0d964.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://63375f02132b46ee0be0d964.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find(favObj => favObj.id === obj.id)) {
      axios.delete(`https://63375f02132b46ee0be0d964.mockapi.io/favorites/${obj.id}`)
      setFavorites(prev => prev.filter((item) => item.id !== obj.id))
    } else {
      axios.post("https://63375f02132b46ee0be0d964.mockapi.io/favorites", obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };
  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              items={items}
              favorited={true}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          exact
          element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
