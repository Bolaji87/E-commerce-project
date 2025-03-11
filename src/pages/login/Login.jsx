import React, { useEffect } from "react";
import { useState } from "react";
import "./login.css";
// import { authenticateUser } from "../../utils";
import { useUser } from "../../Hooks/contexts/UserContext";
import { useAuthContext } from "../../Hooks/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const [errorMsg, setErrorMsg] = useState("");
  const { login, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  // const { setUser, setIsLogged } = useUser();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (!email || !password) return;

  //   const getUser = async () => {
  //     const res = await authenticateUser(email, password);
  //     res
  //       ? (setUser(res), setIsLogged(true))
  //       : setErrorMsg("INVALID EMAIL OR PASSWORD");

  //     console.log("RESPONSE", res);
  //   };
  //   getUser();

  //   setEmail("");
  //   setPassword("");
  // };

  useEffect(() => {
    if (isAuthenticated) navigate("/checkout");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) login(email, password);
  };

  return (
    <form className="login-cont" onSubmit={handleSubmit}>
      <span className="error-span">{errorMsg}</span>
      <div className="login-form">
        <label className="login-label" htmlFor="email">
          Input Your Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="example@mail.com"
        />
        <label className="login-label" htmlFor="password">
          Your Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          placeholder="******"
        />
        <button className="btn-login" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
