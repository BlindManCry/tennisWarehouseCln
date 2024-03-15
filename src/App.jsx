import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home/Home";
import BabolatCategorieOverview from "./components/categoriesOverview/BabolatCategorieOverview";
import Cart from "./pages/Cart/Cart";
// import SingleProduct from "./pages/SingleProduct/SingleProduct";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/BabolatRacketsOverview",
        element: <BabolatCategorieOverview />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/singleProduct/:productId",
      //   element: <SingleProduct />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
