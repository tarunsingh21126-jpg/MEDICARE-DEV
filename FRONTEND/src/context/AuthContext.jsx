import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { loginUser, registerUser } from "../services/authService";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);

  async function login(email, password) {
    const data = await loginUser(email, password);
    setUser(data.user);
    setToken(data.token);
  }

  async function register(name, email, password) {
    const data = await registerUser(name, email, password);
    setUser(data.user);
    setToken(data.token);
  }

  function logout() {
    setUser(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}