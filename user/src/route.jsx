import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Home from "./views/Home.jsx";
import Menu from "./views/Menu.jsx";
import Detail from "./views/Detail.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
