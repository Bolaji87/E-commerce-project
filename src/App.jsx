import { Suspense, useRef, useState } from "react";

import NavBar from "./components/header/NavBar";
import { appRoute } from "./route";
import { Navigate, Route, Routes } from "react-router-dom";
import { useUser } from "./Hooks/contexts/UserContext";

function App() {
  const { isLogged } = useUser();

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavBar />
        <Routes>
          {appRoute.map((route) => {
            // if (route.requiresAuth && !isLogged) {
            if (route.requiresAuth) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                  element={<Navigate replace to={"/login"} />}
                />
              );
            } else {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                  element={<route.component />}
                />
              );
            }
          })}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
