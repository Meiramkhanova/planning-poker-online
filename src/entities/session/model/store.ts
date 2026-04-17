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
  isLoading: boolean;
  isProcessing: boolean;
  error: string | null;
}

export const useSessionStore = create<sessionStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  isProcessing: false,
  error: null,
  login: async (data: LoginCredentials) => {
    set({ isProcessing: true, error: null });

    try {
      const response = await loginRequest(data);
      const { access_token, user } = response;

      localStorage.setItem("accessToken", access_token);

      set({
        user: user,
        isAuthenticated: true,
      });
    } catch (err: any) {
      const message = err.response?.data?.message || "Error in Login";
      set({ error: message });
      throw err;
    } finally {
      set({ isProcessing: false });
    }
  },
  register: async (data: RegisterCredentials) => {
    set({ isProcessing: true, error: null });
    try {
      const response = await registerRequest(data);
      const { access_token, user } = response;

      localStorage.setItem("accessToken", access_token);

      set({
        user: user,
        isAuthenticated: true,
      });
    } catch (err: any) {
      const message = err.response?.data?.message || "Error in register";
      set({ error: message });
      throw err;
    } finally {
      set({ isProcessing: false });
    }
  },
  logout: () => {
    localStorage.removeItem("accessToken");

    set({
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },
  checkAuth: async () => {
    set({ isLoading: true });

    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        set({ isAuthenticated: false, user: null });
        return;
      }

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
    } finally {
      set({ isLoading: false });
    }
  },
}));
