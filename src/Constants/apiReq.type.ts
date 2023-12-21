import { Product } from "./common.type";

export interface AddToCartReq {
  cartItem: Product;
  cartLastUpdate: Date;
}

export interface AddToWishlistReq {
  wishListItem: Product;
  wishListLastUpdate: Date;
}

export interface RemoveFromCartReq extends AddToCartReq {}

export interface RemoveFromWishlisReq extends AddToCartWishlistReq {}

export interface AddToCartWishlistReq {
  cartList?: AddToCartReq;
  wishList?: AddToCartWishlistReq;
}

// _id, productId, isInCart, isInWishList, quantity
export interface AddToCartWishGlobReq {
  _id?: string;
  productId: string;
  isInCart?: boolean;
  isInWishList?: boolean;
  quantity?: number;
}