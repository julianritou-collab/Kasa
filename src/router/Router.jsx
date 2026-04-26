//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Accommodation from "../pages/Accommodation";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import Spinner from "../components/Spinner";

import { getAccommodations } from "../api/accommodationApi";

// Loader pour la page Home
const homeLoader = async () => {
  const accommodations = await getAccommodations();
  return { accommodations };
};

const router = createBrowserRouter([
  {
    fallbackElement: <MainLayout><Spinner /></MainLayout>, // Affiche la page de chargement
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader },
      { path: "/accommodation/:id", element: <Accommodation /> },
      { path: "/about", element: <About /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}


export default Router;