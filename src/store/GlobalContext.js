import { createContext } from "react";

const GlobalContext = createContext({
  wordSearched: '',
  setWordSearched: () => {},
  darkMode: false,
  setDarkMode: () => {},
  user: null,
  setUser: () => {},
  logout: () => {},
  favorites: [],
  setFavorites: () => {},
});

export default GlobalContext;
