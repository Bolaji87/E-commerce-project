import { lazy } from "react";
import React from "react";

// import Product from "./pages/products/Product.jsx";
// import AboutUs from "./pages/about/AboutUs.jsx";
// import Home from "./pages/home-page/Home.jsx";
// import AddToCart from "./pages/cart/AddToCart.jsx";
// import Login from "./pages/login/Login.jsx";
// import Checkout from "./pages/checkout/Checkout.jsx";
// import NotFound from "./pages/NotFound.jsx";

const Home = React.lazy(() => import("./pages/home-page/Home"));
const Product = React.lazy(() => import("./pages/products/Product"));
const AboutUs = React.lazy(() => import("./pages/about/AboutUs"));
const AddToCart = React.lazy(() => import("./pages/cart/AddToCart"));
const Login = React.lazy(() => import("./pages/login/Login.jsx"));
const Checkout = React.lazy(() => import("./pages/checkout/Checkout.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));

export const appRoute = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products/:category?",
    component: Product,
    requiresAuth: false,
  },
  {
    path: "about",
    component: AboutUs,
    requiresAuth: false,
  },
  {
    path: "cart",
    component: AddToCart,
    requiresAuth: false,
  },
  {
    path: "checkout",
    component: Checkout,
    requiresAuth: true,
  },
  {
    path: "login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];

export const ALLOEWD_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};
