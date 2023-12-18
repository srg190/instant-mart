import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "Routes";
const Content = () => {
  return (
    <Routes>
      {routes.length > 0 &&
        routes.map((route, key) => (
          <Route path={route.path} element={route.ele} key={key} />
        ))}
    </Routes>
  );
};

export default Content;
