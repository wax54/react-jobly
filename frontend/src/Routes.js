import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./User/Profile";
import CompanyList from "./Companies/CompanyList";
import CompanyDetail from "./Companies/CompanyDetail";
import AllJobs from "./Jobs/AllJobs";

import Login from "./Forms/Login";

import Signup from "./Forms/Signup";





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
            <AllJobs />
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
