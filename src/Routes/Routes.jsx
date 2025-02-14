import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import App from "../App"; // Ensure correct path to App component

// Lazy load components
const LazyComponent = (importFunc) => {
  const Component = lazy(importFunc);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

// Router configuration with App as a parent layout
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App wraps all routes
    children: [
      { index: true, element: LazyComponent(() => import("../Components/Home/Home")) },
      { path: 'chain/:chain', element: LazyComponent(() => import("../Pages/List/List")) },
      // { path: 'pair/:chain', element: LazyComponent(() => import("../Pages/Pair/Pair")) },
      { path: 'pair/:address', element: LazyComponent(() => import("../Pages/PairShowDeatils/PairShow")) },
      { path: 'chain/:chain/pair/:address', element: LazyComponent(() => import("../Pages/PairShowDeatils/PairShow")) },
    ],
  },
]);
