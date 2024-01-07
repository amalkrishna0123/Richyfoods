import React, { createContext, useContext, useState } from 'react';

export const AddtoCartManage = createContext();

export const AddToCartContext = ({ children }) => {
  let [addToCartItem, setAddToCartItem] = useState([]);

  const addToCartHandler = (cartImg, cartTitle) => {
    setAddToCartItem([
      ...addToCartItem,
      {
        img: cartImg,
        title: cartTitle,
      }
    ]);
  };

  return (
    <AddtoCartManage.Provider value={{ addToCartItem, addToCartHandler }}>
      {children}
    </AddtoCartManage.Provider>
  );
};
