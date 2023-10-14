"use client";

import { createContext, useState } from "react";
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>;
};
