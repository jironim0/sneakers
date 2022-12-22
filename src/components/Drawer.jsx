import React from "react";

let Drawer = ({ onRemove, onClose, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 cu-p">
          Basket
          <img onClick={onClose} className="removeBtn" src="/img/remove.png" />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/remove.png"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>21 498</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>1074</b>
                </li>
              </ul>
              <button className="greenButton">Checkout</button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              class="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-box.png"
            ></img>
            <h2>Basket zero</h2>
            <p class="opacity-6">Create one more sneakers, if u need</p>
            <button onClick={onClose} className="greenButton">Back</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
