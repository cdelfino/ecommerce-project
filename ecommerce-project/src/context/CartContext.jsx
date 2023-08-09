/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exists = isInCart(item.id);

    if (exists) {
      let updatedArray = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + item.quantity };
        } else {
          return product;
        }
      });
      setCart(updatedArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const isInCart = (id) => {
    let exist = cart.some((product) => product.id === id);
    return exist;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    const product = cart.find((product) => product.id === +id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
