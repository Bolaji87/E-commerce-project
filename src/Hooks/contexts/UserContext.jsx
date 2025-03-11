import React, { createContext, useContext, useState } from "react";

const userContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <userContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </userContext.Provider>
  );
}

function useUser() {
  const context = useContext(userContext);
  if (context === undefined)
    throw new Error("context was outside of UserProvider");
  return context;
}

export { UserProvider, useUser };
