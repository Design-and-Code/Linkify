import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import App from './pages/HomePage';
import Account from './pages/Account';
import Features1 from './components/HomePage/features1/features1'
import Features2 from './components/HomePage/features2/features2'
import Features3 from './components/HomePage/features3/features3'
import Features4 from './components/HomePage/features4/features4'

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
                    <Account/>
                </Route>
                <Route path="/features1">
                    <Features1 />
                </Route>
                <Route path="/features2">
                    <Features2 />
                </Route>
                <Route path="/features3">
                    <Features3 />
                </Route>
                <Route path="/features4">
                    <Features4 />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'))