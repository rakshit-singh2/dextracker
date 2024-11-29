import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import List from "../Pages/List/List";
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
      { path: '', element: <List /> },
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
