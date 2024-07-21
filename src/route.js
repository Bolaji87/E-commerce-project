import Home from "./pages/home-page/Home.jsx";
import Product from "./pages/products/Product.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";

export const appRoute = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "products",
    component: Product,
  },
  {
    path: "about",
    component: AboutUs,
  },
];
