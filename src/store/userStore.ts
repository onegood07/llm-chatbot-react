import { create } from "zustand";

interface UserStore {
  studentId: string;
  setStudentId: (studentId: string) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  studentId: "",
  setStudentId: (id) => set({ studentId: id }),
  isLogin: false,
  setIsLogin: (flag) => set({ isLogin: flag }),
}));
