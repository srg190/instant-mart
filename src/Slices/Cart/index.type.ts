export interface Rating {
  rate: number;
  count: number;
}

export interface ProductCart {
  _id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image?: string;
  rating: Rating;
  stock: number;
  brand: string;
  images?: string[];
  discountPercentage?: number;
  thumbnail?: string;
  isInCart?: boolean;
  isInWishList?: boolean;
  quantity?: number;
}

export interface CartState {
  _id: string
  error: string;
  cartItems: ProductCart[];
  wishList: ProductCart[];
  loading: boolean;
}
