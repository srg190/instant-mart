export interface Product {
  id?: string | number;
  name?: string;
  stock?: number;
  rate?: number;
  category?: string;
  quantity?: number;
  isInCart?: boolean;
  isInWishList?: boolean;
  price?: number;
}

export interface ProductState {
  isInCart: boolean | undefined;
  isInWishList: boolean | undefined;
}
