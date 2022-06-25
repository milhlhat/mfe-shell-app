import create from "zustand";
import { Account } from "types-shared";
const useStore = create<Account>((set) => ({
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
