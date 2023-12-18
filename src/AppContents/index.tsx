import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "Routes";
const Content = () => {
  return (
    <div>
      <Routes>
        {routes.length > 0 &&
          routes.map((route, key) => (
            <Route path={route.path} element={route.ele} key={key} />
          ))}
      </Routes>
    </div>
  );
};

export default Content;
