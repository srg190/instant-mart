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

export interface CartItems {
  products: Product[];
  lastUpdate: Date;
}

export interface WhishList extends CartItems {}

export interface User {
  email: string;
  password: string;
  confirmPassoword?: string;
  address?: Address;
  token?: string;
  cartItems?: CartItems;
  whishList?: WhishList;
}

export interface Address {
  street: string;
  location: string;
  city: string;
  houseNumber: string;
}
