import React from "react";

const LinkifyContext = React.createContext();

const acquireTheme = () => {
  let theme = localStorage.getItem("theme");
  if (!theme) return "dark-theme";
  else return theme;
};

const LinkifyProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(acquireTheme);
  return (
    <LinkifyContext.Provider value={{ theme, setTheme }}>
      {children}
    </LinkifyContext.Provider>
  );
};

export { LinkifyContext, LinkifyProvider };
