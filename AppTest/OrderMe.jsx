// import React from 'react'

import { useContext } from 'react';
import { assets, food_list } from '../src/assets/assets/frontend_assets/assets';
import { StoreContext } from '../src/context/StoreContext';

const OrderMe = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(StoreContext);
  return (
    <div className="food-display">
      <h2>Items</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <div
              className="food-item"
              key={index}>
              <div className="img-container">
                <img
                  className="img"
                  src={item.image}
                />
                {!cartItems[item._id] ? (
                  <img
                    className="add"
                    onClick={() => addToCart(item._id)}
                    src={assets.add_icon_white}
                  />
                ) : (
                  <div className="food-count">
                    <img
                      onClick={() => {
                        removeFromCart(item._id);
                      }}
                      src={assets.remove_icon_red}
                    />
                    <p>{cartItems[item._id]}</p>
                    <img
                      onClick={() => {
                        addToCart(item._id);
                      }}
                      src={assets.add_icon_green}
                    />
                  </div>
                )}
              </div>
              <div className="food-info">
                <div className="name-rating">
                  <p>{item.name}</p>
                  <img src={assets.rating_starts} />
                </div>
                <p className="food-description">{item.description}</p>
                <p className="food-price">${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderMe;
