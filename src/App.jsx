import { useState } from "react";
import Home from "./pages/home-page/Home";
import NavBar from "./components/header/NavBar";
import { appRoute } from "./route";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {appRoute.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
