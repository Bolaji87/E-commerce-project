import Home from "./pages/home-page/Home.jsx";
import Product from "./pages/products/Product.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";

export const ALLOEWD_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};
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
