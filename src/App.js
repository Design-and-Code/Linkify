import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Account from "./pages/Account";
import { LinkifyContext } from "./context";
import Homepage from "./pages/HomePage/index.js";

function App() {
  const { theme } = useContext(LinkifyContext);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
