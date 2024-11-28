import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import List from "../Pages/List/List";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <List /> },
    ],
  },
]);
