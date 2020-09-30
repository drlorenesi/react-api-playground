import create from 'zustand';

const useStore = create((set) => ({
  user: null,
  handleLogIn: (login) => set((state) => ({ user: login })),
  handleLogOut: () => set({ user: null }),
}));

export default useStore;
