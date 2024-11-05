import Product from "./pages/products/Product.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";
import Home from "./pages/home-page/Home.jsx";

export const appRoute = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products/:category?",
    component: Product,
  },
  {
    path: "about",
    component: AboutUs,
  },
];

export const ALLOEWD_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};
