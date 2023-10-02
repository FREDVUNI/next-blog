import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
