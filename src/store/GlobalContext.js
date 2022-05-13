import { createContext } from "react";

const GlobalContext = createContext({
  search: '',
  setSearch: () => {},
  darkMode: false,
  setDarkMode: () => {},
});

export default GlobalContext;
