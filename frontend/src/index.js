import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";



const Home = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    )
}


ReactDOM.render(<Home />, document.getElementById('root'));
