export type CartItemType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  count: number;
  size: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
