export interface ProductCart {
  _id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  stock: number;
  isInCart: boolean;
  isInWishList: boolean;
}

export interface CartState {
  error: string;
  cartItems: ProductCart[];
  wishList: ProductCart[];
  loading: boolean;
}
