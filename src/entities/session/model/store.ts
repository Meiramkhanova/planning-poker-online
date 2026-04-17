import { getMe, loginRequest, registerRequest } from "@/shared/api";
import type { LoginCredentials, RegisterCredentials, User } from "./types";
import { create } from "zustand";

interface sessionStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useSessionStore = create<sessionStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (data: LoginCredentials) => {
    try {
      const response = await loginRequest(data);
      const { access_token, user } = response;
      localStorage.setItem("accessToken", access_token);

      set({
        user: user,
        isAuthenticated: true,
      });
    } catch (err) {
      console.error(`Ошибка ${err}`);
      throw err;
    }
  },
  register: async (data: RegisterCredentials) => {
    try {
      const response = await registerRequest(data);
      const { access_token, user } = response;
      localStorage.setItem("accessToken", access_token);

      set({
        user: user,
        isAuthenticated: true,
      });
    } catch (err) {
      console.error(`Ошибка ${err}`);
      throw err;
    }
  },
  logout: () => {
    localStorage.removeItem("accessToken");

    set({
      user: null,
      isAuthenticated: false,
    });
  },
  checkAuth: async () => {
    try {
      const response = await getMe();
      set({
        user: response,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error(`Ошибка ${error}`);

      localStorage.removeItem("accessToken");
      set({ user: null, isAuthenticated: false });

      throw error;
    }
  },
}));
