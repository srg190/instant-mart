import React from "react";

const Home = React.lazy(() => import("pages/Home"));

const routes = [{ path: "/", ele: <Home />, name: "Home" }];

export default routes;
