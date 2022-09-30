import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Account from "./pages/Account";
import { LinkifyContext } from "./context";
import Homepage from "./pages/HomePage/index.js";
import "./App.css";

function App() {
  const { theme } = useContext(LinkifyContext);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
