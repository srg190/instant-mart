export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  stock: number;
  brand: string;
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
  total?: number;
  limit?: number;
  skip?: number;
  currentFilterData?: Filter;
}
