import { Product, User } from "./common.type";

export interface AddToCartRes {
  success: boolean;
  user: User;
  message: string;
}

export interface AddToWishlistRes {}

export interface RemoveFromCartRes {}

export interface RemoveFromWishlisRes {}

export interface AddToCartWishlistRes {}

export interface CartProduct {
  product: Product;
  isInCart: boolean;
  isInWishlist: boolean;
  quantity: number;
}

export interface Cart {
  _id: string;
  products: CartProduct[];
}

export interface AddToCartWishGlobRes {
  success: boolean;
  message: string;
  cart: Cart;
}
