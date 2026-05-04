import { loginRequest } from "@/features/auth/api/login";
import type { User } from "./types";
import { create } from "zustand";
import { registerRequest } from "@/features/auth/api/register";
import { getMe } from "../api/getMe";
import type {
  LoginCredentials,
  RegisterCredentials,
} from "@/features/auth/model/types";

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
      const detail = err.response?.data?.detail;

      let message = "Error in Login";

      if (typeof detail === "string") {
        message = detail;
      } else if (Array.isArray(detail)) {
        message = detail.map((d) => d.msg).join(", ");
      } else if (detail?.message) {
        message = detail.message;
      }

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
      const detail = err.response?.data?.detail;

      let message = "Error in Login";

      if (typeof detail === "string") {
        message = detail;
      } else if (Array.isArray(detail)) {
        message = detail.map((d) => d.msg).join(", ");
      } else if (detail?.message) {
        message = detail.message;
      }

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
