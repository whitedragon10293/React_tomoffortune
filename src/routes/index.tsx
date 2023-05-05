import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const routes = [
  { path: "/", component: lazy(() => import("pages/Reception")) },
  { path: "/map", component: lazy(() => import("pages/Map")) },
  { path: "/mint", component: lazy(() => import("pages/Mint")) },
  { path: "/oasis", component: lazy(() => import("pages/Oasis")) },
  { path: "/mummycity", component: lazy(() => import("pages/MummyCity")) },
  { path: "*", component: lazy(() => import("pages/NotFound")) },
];

function ComposeRoutes() {
  return (
    <Suspense>
      <Routes>
        {routes.map(({ component, path }, i) => {
          const PageComponent = component;
          return <Route key={i} path={path} element={<PageComponent />} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default ComposeRoutes;
