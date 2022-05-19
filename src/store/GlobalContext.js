import { createContext } from "react";

const GlobalContext = createContext({
  wordSearched: '',
  setWordSearched: () => {},
  darkMode: false,
  setDarkMode: () => {},
});

export default GlobalContext;
