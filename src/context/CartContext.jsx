import { createContext, useContext, useState } from "react";
import { usePersitentStorage } from "../hooks/usePersitentStorage";

const CartContext = createContext();
const KEY_CONTEXT = "PRODUCTS";

export const CartContextProvider = ({ children }) => {
  const { getItem, addItem, clearAll } = usePersitentStorage();
  const [products, setProducts] = useState(getItem(KEY_CONTEXT) || []);

  const addProduct = (product) => {
    const allProducts = [...products, product];
    setProducts(allProducts);
    addItem(KEY_CONTEXT, allProducts);
  };

  const removeProduct = (productId) => {
    setProducts((prev) => {
      const next = prev.filter((p) => p.id !== productId);
      addItem(KEY_CONTEXT, next);
      return next;
    });
  };

  const clear = () => {
    setProducts([]);
    clearAll();
  };

  const value = {
    products,
    addProduct,
    removeProduct,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  return context;
};
