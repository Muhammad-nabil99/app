/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import useLogin from "../features/auth/useLogin";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { login } = useLogin();
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const logIn = ({ role, password, username }) => {
    // localStorage.setItem("user", JSON.stringify({password, username }));
    login({ password, username });
    navigate(`/${role}/dashboard`);
    return;
  };
  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/masuk");
    return;
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
