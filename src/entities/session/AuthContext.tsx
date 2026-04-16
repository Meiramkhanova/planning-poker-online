import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "./model/types";
import { client, setAccessToken } from "@/shared/api";

interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  isInitializing: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const login = (userData: User, token: string) => {
    setAccessToken(token);
    setUser(userData);
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);
  };

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await client.get<User>("/auth/me");
        setUser(res.data);
      } catch (e) {
        console.log("Сессия не найдена");
      } finally {
        setIsInitializing(false);
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuth: !!user, isInitializing, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth error");
  return context;
};
