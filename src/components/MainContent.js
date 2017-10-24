import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Signin from "./auth/Signin";
import NoMatch from "./NoMatch";

const MainContent = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/signin" component={Signin}/>
            <Route component={NoMatch}/>
        </Switch>
    </div>
);

export default MainContent;