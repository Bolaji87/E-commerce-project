import { useContext, useReducer } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const initialState = { user: null, isAuthenticated: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "logout":
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error("unknown acion type");
  }
};

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  };
  const logout = () => {
    dispatch({ type: "logout" });
  };
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider component");
  return context;
};

export { AuthProvider, useAuthContext };
