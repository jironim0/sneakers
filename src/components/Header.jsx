import React from "react";
import { Link } from "react-router-dom";

let Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/sneakers.png" alt="logo"></img>
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">The best shop</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/card.svg" alt="cart"></img>
          <span>1205 rub</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-20 cu-p"
              width={18}
              height={18}
              src="/img/favorite.png"
              alt="bookmarks"
            ></img>
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.png" alt="user"></img>
        </li>
      </ul>
    </header>
  );
};

export default Header;
