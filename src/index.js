import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./pages/HomePage";
import Account from "./pages/Account";
import { LinkifyProvider } from "./context";

function Main() {
  //   const val = React.useContext(LinkifyContext);
  //   console.log(val);
  return (
    <LinkifyProvider>
      <Router>
        <Link to="/"></Link>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>
    </LinkifyProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
