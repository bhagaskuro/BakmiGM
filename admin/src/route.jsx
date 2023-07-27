import { createBrowserRouter, redirect } from "react-router-dom";

import Tables from "./components/Tables.jsx";
import Categories from "./components/Categories.jsx";
import Login from "./views/login.jsx";
import App from "./App.jsx";
import User from "./components/User.jsx";
import Ingredient from "./components/Ingredient.jsx";
import FormCuisine from "./components/FormCuisine.jsx";
import FormIngredient from "./components/FormIngredient.jsx";
import FormCategory from "./components/FormCategory.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      let token = localStorage.access_token;
      if (!token) {
        return redirect("/");
      }
      return null;
    },
    children: [
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/home",
        element: <Tables />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/ingredients",
        element: <Ingredient />,
      },
      {
        path: "/formCuisine",
        element: <FormCuisine />,
      },
      {
        path: "/formCategory",
        element: <FormCategory />,
      },
      {
        path: "/formIngredient",
        element: <FormIngredient />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
    loader: () => {
      let token = localStorage.access_token;
      if (token) {
        return redirect("/home");
      }
      return null;
    },
  },
]);

export default router;
