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
  product: string;
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

//   {
//     "success": true,
//     "cart": {
//         "products": [
//             {
//                 "product": "6580a6a8e7089fa8e9cf6d75",
//                 "isInCart": false,
//                 "isInWishlist": false,
//                 "quantity": 0,
//                 "_id": "658556c018966caf8c16efbc",
//                 "addedAt": "2023-12-22T09:28:32.641Z"
//             }
//         ],
//         "_id": "658556c018966caf8c16efbb",
//         "createdAt": "2023-12-22T09:28:32.641Z",
//         "__v": 0
//     },
//     "message": "Added Successfully"
// }