export interface Rating {
  rate: number;
  count: number;
}


export interface Product {
  _id?: string;
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
  rating?: Rating | number;
  stock?: number;
  brand?: string;
  images?: string[];
  discountPercentage?: number;
  thumbnail?: string;
  isInCart?: boolean;
  isInWishList?: boolean;
  quantity?: number;
}

export interface Filter {
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  rating?: number;
  stock?: number;
  keywords?: string;
  page?: number;
  totalPage?: number;
  totalProducts?: number;
  perPage?: number;
  brand?: string;
  search?: string;
}

export interface ProductState {
  error: string;
  products: Product[];
  loading: boolean;
  filteredProducts?: Product[];
  categories: string[];
  product?: Product;
  currentFilterData?: Filter;
}

export interface RemoveFromCartAction {
  type: "cart/removeFromCart";
  payload: {
    id: string;
  };
}

export interface RemoveFromWishListAction {
  type: "cart/removeFromWishList";
  payload: {
    id: string;
  };
}
