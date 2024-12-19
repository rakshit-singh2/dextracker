import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListUniswapV3Etherium from "../Pages/List/ListUniswapV3Etherium";
import ListUniswapV2Etherium from "../Pages/List/ListUniswapV2Etherium";
import ListPancakeSwapEtherium from "../Pages/List/ListPancakeSwapEtherium";
import Watchlist from "../Pages/Watchlist/Watchlist";
import Alerts from "../Pages/Alerts/Alerts";
import Multicharts from "../Pages/Multicharts/Multicharts";
import NewPairs from "../Pages/NewPairs/NewPairs";
import GainersLosers from "../Pages/GainersLosers/GainersLosers";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Api from "../Pages/Api/Api";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ListUniswapV3Etherium /> }, // Default route
      { path: 'uniswapv3-etherium', element: <ListUniswapV3Etherium /> },
      { path: 'uniswapv2-etherium', element: <ListUniswapV2Etherium /> },
      { path: 'pancakeswap-etherium', element: <ListPancakeSwapEtherium/> },
      { path: 'watchlist', element: <Watchlist /> },
      { path: 'alerts', element: <Alerts /> },
      { path: 'multicharts', element: <Multicharts /> },
      { path: 'new-pairs', element: <NewPairs /> },
      { path: 'gainers-losers', element: <GainersLosers /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'api', element: <Api /> },
    ],
  },
]);
