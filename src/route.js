import Product from "./pages/products/Product.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";
import Home from "./pages/home-page/Home.jsx";
import AddToCart from "./pages/cart/AddToCart.jsx";
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
  {
    path: "cart",
    component: AddToCart,
  },
];

export const ALLOEWD_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};
