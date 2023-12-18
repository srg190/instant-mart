import React from "react";

const Home = React.lazy(() => import("pages/Home"));
const Product = React.lazy(() => import("Components/ProductCard"));
const SignUp = React.lazy(() => import("pages/Auth/SignupForm"));
const SignIn = React.lazy(() => import("pages/Auth/SigninForm"));
const Cart = React.lazy(() => import("pages/Cart"));
const WishList = React.lazy(() => import("pages/WishList"));
const ProductDetail = React.lazy(() => import("pages/ProductDetail"));

const routes = [
  { path: "/", ele: <Home />, name: "Home" },
  { path: "/product", ele: <Product />, name: "Product" },
  { path: "/signup", ele: <SignUp />, name: "SignUp" },
  { path: "/signin", ele: <SignIn />, name: "SignIn" },
  { path: "/cart-items", ele: <Cart />, name: "UserCart" },
  { path: "/wishlist-items", ele: <WishList />, name: "UserWishList" },
  {
    path: "/product/:productId",
    ele: <ProductDetail />,
    name: "ProductDetail",
  },
];

export default routes;
