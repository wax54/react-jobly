import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import CompanyList from "./CompanyList";

import CompanyDetail from "./CompanyDetail";

import JobsList from "./JobsList";

import Login from "./Login";

import Signup from "./Signup";





const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/profile">
            <Profile />
        </Route>

        <Route exact path="/companies">
            <CompanyList />
        </Route>
        <Route exact path="/companies/:handle">
            <CompanyDetail />
        </Route>
        <Route exact path="/jobs">
            <JobsList />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/signup">
            <Signup />
        </Route>


    </Switch>
);

export default Routes
