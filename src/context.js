import React from "react";

const LinkifyContext = React.createContext();

const acquireTheme = () => {
  let theme = localStorage.getItem("theme");
  if (!theme) return "dark-theme";
  else return theme;
};

const LinkifyProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(acquireTheme);
  const [isSignIn, setIsSignIn] = React.useState(true);
  const [isLogIn, setIsLogIn] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const signInToggler = () => {
    console.log(isSignIn, isLogIn);
    console.log("signin is working");
    setIsSignIn(true);
    setIsLogIn(false);
    console.log(isSignIn, isLogIn);
  };

  const logInToggler = () => {
    console.log(isSignIn, isLogIn);
    console.log("Login is working");
    setIsSignIn(false);
    setIsLogIn(true);
    console.log(isSignIn, isLogIn);
  };

  return (
    <LinkifyContext.Provider
      value={{
        theme,
        setTheme,
        isSignIn,
        isLogIn,
        signInToggler,
        logInToggler,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </LinkifyContext.Provider>
  );
};

export { LinkifyContext, LinkifyProvider };
