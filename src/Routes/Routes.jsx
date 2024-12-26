import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import React, { lazy, Suspense } from "react";
import Services from "../services";

// LazyComponent to dynamically import components
const LazyComponent = (importFunc) => {
  const Component = lazy(importFunc);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

// Router configuration
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <Navigate to={'uniswapv3-etherium'} replace />, index: true },
      
      // Chains and Swaps
      // Chain etherium
      { path: 'uniswapv3-etherium', element: LazyComponent(() => import("../Pages/List/etherium/ListUniswapV3Etherium")) },
      { path: 'uniswapv2-etherium', element: LazyComponent(() => import("../Pages/List/etherium/ListUniswapV2Etherium")) },
      { path: 'pancakeswapv2-etherium', element: LazyComponent(() => import("../Pages/List/etherium/ListPancakeSwapEtherium")) },

      // Chain polygon
      { path: 'uniswapv3-polygon', element: LazyComponent(() => import("../Pages/List/polygon/ListUniswapV3Polygon")) },

      // Chain base
      { path: 'uniswapv3-base', element: LazyComponent(() => import("../Pages/List/base/ListUniswapV3Base")) },

      // Chain bsc
      { path: 'uniswapv3-bsc', element: LazyComponent(() => import("../Pages/List/bsc/ListUniswapV3Bsc")) },

      // Chain cello
      { path: 'uniswapv3-cello', element: LazyComponent(() => import("../Pages/List/cello/ListUniswapV3Cello")) },

      // Chain optimism
      { path: 'uniswapv3-optimism', element: LazyComponent(() => import("../Pages/List/optimism/ListUniswapV3Optimism")) },

      // Chain arbitrum
      { path: 'uniswapv3-arbitrum', element: LazyComponent(() => import("../Pages/List/arbitrum/ListUniswapV3Arbitrum")) },

      // Chain avalanche
      { path: 'uniswapv3-avalanche', element: LazyComponent(() => import("../Pages/List/avalanche/ListUniswapV3Avalanche")) },

      // Chain solana
      { path: 'raydiumv1-solana', element: LazyComponent(() => import("../Pages/List/solana/ListRaydiumV1Solana")) },
    ],
  },
  {
    path: '/services',
    element: <Services />,
    children: [
      { path: 'watchlist', element: LazyComponent(() => import("../Pages/Watchlist/Watchlist")) },
      { path: 'alerts', element: LazyComponent(() => import("../Pages/Alerts/Alerts")) },
      { path: 'multicharts', element: LazyComponent(() => import("../Pages/Multicharts/Multicharts")) },
      { path: 'newpairs', element: LazyComponent(() => import("../Pages/NewPairs/NewPairs")) },
      { path: 'gainerslosers', element: LazyComponent(() => import("../Pages/GainersLosers/GainersLosers")) },
      { path: 'portfolio', element: LazyComponent(() => import("../Pages/Portfolio/Portfolio")) },
      { path: 'api', element: LazyComponent(() => import("../Pages/Api/Api")) },
      { path: 'pair/:chain/:pairaddress', element: LazyComponent(() => import("../Pages/Pair/Pair")) },
      { path: '*', element: <div>404 - Page Not Found</div> },
    ],
  },
]);
