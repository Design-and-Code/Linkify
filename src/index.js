import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import App from './pages/HomePage';
import Account from './pages/Account';


function Main(){
    return(
        <Router>
            <Link to="/"></Link>
            <Link to="/account"></Link>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'))