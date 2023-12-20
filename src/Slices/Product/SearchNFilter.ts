// import { Product } from "./index.type";
// interface FilterCategoryType {
//   title?: boolean;
//   price?: boolean;
//   category?: boolean;
//   description?: boolean;
//   rating?: boolean;
//   stock?: boolean;
//   brand?: boolean;
//   keywords?: boolean;
// }
// const filterCategory = {
//   title: 0,
//   price: 1,
//   category: 2,
//   description: 3,
//   rating: 4,
//   stock: 5,
//   brand: 6,
//   keywords: 7,
// };
// const fun = (
//   product: Product,
//   str: string,
//   type: keyof typeof filterCategory
// ) => {
//   const code = filterCategory[type];
//   const key = str.toLowerCase();
//   switch (code) {
//     case 0 || 7:
//       product.title.toLowerCase().includes(key);
//       if(code === 0) break;
//     case 1 || 7:
//       product.category.toLowerCase().includes(key);
//       if(code === 1) break;
//     case 2 || 7:
//       product.description.toLowerCase().includes(key);
//       if(code === 2) break;
//     case 6 || 7:
//       product.brand.toLowerCase().includes(key);
//       break;
//     case 4:
//       rating && product.rating === rating;
//       break;
//     case 5:
//       product.stock === stock;
//       break;
//     case 7:
//       product.title.toLowerCase().includes(key.toLowerCase()) ||
//         product.description.toLowerCase().includes(key.toLowerCase()) ||
//         product.category.toLowerCase().includes(key.toLowerCase()) ||
//         product.brand.toLowerCase().includes(key.toLowerCase());
//       break;

//     default:
//       break;
//   }
// };

// if (
//   !title &&
//   !price &&
//   !category &&
//   !description &&
//   !rating &&
//   !stock &&
//   !brand &&
//   !keywords
// ) {
//   // No filters applied, return all products
//   state.filteredProducts = [...state.products];
// } else {
//   state.filteredProducts = state.products.filter((product) => {

      // Object.keys(product).forEach((v: string) => (filterCategory as any)[v] = true)

//     const matchesTitle =
//       title && product.title.toLowerCase().includes(title.toLowerCase());
//     const matchesPrice = price && product.price === price;
//     const matchesCategory =
//       category &&
//       product.category.toLowerCase().includes(category.toLowerCase());
//     const matchesDescription =
//       description &&
//       product.description
//         .toLowerCase()
//         .includes(description.toLowerCase());
//     const matchesRating = rating && product.rating === rating;
//     const matchesStock = stock && product.stock === stock;
//     const matchesBrand =
//       brand && product.brand.toLowerCase().includes(brand.toLowerCase());
//     const matchesKeywords =
//       keywords &&
//       (product.title.toLowerCase().includes(keywords.toLowerCase()) ||
//         product.description
//           .toLowerCase()
//           .includes(keywords.toLowerCase()) ||
//         product.category.toLowerCase().includes(keywords.toLowerCase()) ||
//         product.brand.toLowerCase().includes(keywords.toLowerCase()));
//     // Check if any specified filter matches
//     return (
//       matchesTitle ||
//       matchesPrice ||
//       matchesCategory ||
//       matchesDescription ||
//       matchesRating ||
//       matchesStock ||
//       matchesBrand ||
//       matchesKeywords
//     );
//   });
