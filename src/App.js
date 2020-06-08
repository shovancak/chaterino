import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return(
        <Router>
            <Route path="/" exact component={Join}></Route>
            <Route path="/chat" component={Chat}></Route>
        </Router>
    )
}