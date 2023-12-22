import { IsInCart, IsInWishlist, Product } from "Constants/common.type";

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductCart extends Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: Rating;
  stock: number;
  brand: string;
}

export interface CartState {
  _id: string;
  error: string;
  cartItems: ProductCart[];
  wishList: ProductCart[];
  loading: boolean;
  isInCartList: IsInCart;
  isInWishlist: IsInWishlist;
}
