import create from "zustand";
const useStore = create<any>((set) => ({
  logout() {
    set({
      name: "",
      isLogIn: false,
    });
  },
  isLogIn: false,
  name: "",
  login(name: string) {
    set({
      name: name,
      isLogIn: true,
    });
  },
}));

export default useStore;
