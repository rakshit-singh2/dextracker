import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import React, { lazy, Suspense } from "react";

const LazyComponent = (importFunc) => (
  <Suspense fallback={<div>Loading...</div>}>
    {React.createElement(lazy(importFunc))}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <Navigate to={'uniswapv3-etherium'} replace />, index: true },
      { path: 'uniswapv3-etherium', element: LazyComponent(() => import("../Pages/List/ListUniswapV3Etherium")) },
      { path: 'uniswapv2-etherium', element: LazyComponent(() => import("../Pages/List/ListUniswapV2Etherium")) },
      { path: 'pancakeswap-etherium', element: LazyComponent(() => import("../Pages/List/ListPancakeSwapEtherium")) },
      { path: 'watchlist', element: LazyComponent(() => import("../Pages/Watchlist/Watchlist")) },
      { path: 'alerts', element: LazyComponent(() => import("../Pages/Alerts/Alerts")) },
      { path: 'multicharts', element: LazyComponent(() => import("../Pages/Multicharts/Multicharts")) },
      { path: 'new-pairs', element: LazyComponent(() => import("../Pages/NewPairs/NewPairs")) },
      { path: 'gainers-losers', element: LazyComponent(() => import("../Pages/GainersLosers/GainersLosers")) },
      { path: 'portfolio', element: LazyComponent(() => import("../Pages/Portfolio/Portfolio")) },
      { path: 'api', element: LazyComponent(() => import("../Pages/Api/Api")) },
      { path: '*', element: <div>404 - Page Not Found</div> },
    ],
  },
]);
