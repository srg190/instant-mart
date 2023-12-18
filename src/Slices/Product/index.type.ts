export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  stock: number;
  brand: string;
  images?: string[];
  discountPercentage?: number;
  thumbnail?: string;
  isInCart?: boolean;
  isInWishList?: boolean;
}

export interface Filter {
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  rating?: number;
  stock?: number;
  brand?: string;
  keywords?: string;
}

export interface ProductState {
  error: string;
  products: Product[];
  loading: boolean;
  filteredProducts?: Product[];
  categories: string[];
  product?: Product | undefined;
  total?: number;
  limit?: number;
  skip?: number;
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
