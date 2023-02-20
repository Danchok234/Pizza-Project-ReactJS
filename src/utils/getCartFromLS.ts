import { calcTotalPrice } from "./calcTotalPrice";
import { CartItemType } from "../redux/slices/cart/types";

export const getCartFromLS = () => {
  const cartData = localStorage.getItem("cart");
  const items = cartData ? JSON.parse(cartData) : [];
  const totalPrice = calcTotalPrice(items);
  return {
    items: items as CartItemType[],
    totalPrice,
  };
};
