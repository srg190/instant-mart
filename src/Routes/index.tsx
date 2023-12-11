import React from "react";

const Home = React.lazy(() => import("pages/Home"));
const Product = React.lazy(() => import("Components/ProductCard"));
const SignUp = React.lazy(() => import("pages/Auth/SignupForm"));

const routes = [
  { path: "/", ele: <Home />, name: "Home" },
  { path: "/product", ele: <Product />, name: "Product" },
  { path: "/signup", ele: <SignUp />, name: "SignUp" },
];

export default routes;
