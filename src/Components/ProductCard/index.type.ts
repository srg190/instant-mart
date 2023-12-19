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

    // id: number;
    // title: string;
    // description: string;
    // price: number;
    // discountPercentage: number;
    // rating: number;
    // stock: number;
    // brand: string;
    // category: string;
    // thumbnail: string;
    // images: string[];

export interface ProductState {
  isInCart: boolean | undefined;
  isInWishList: boolean | undefined;
}
