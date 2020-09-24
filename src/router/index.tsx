import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
//CustomRoute

import ApplicationRoute from "../components/ApplicationRouter"


//Pages
import Dashboard from "../views/Dashboard"
import Builds from "../views/Builds"
import Login from "../views/Login"


const Routers = () => {
    return (
        <Router>
            <Switch>
                <ApplicationRoute
                    path="/" exact
                    component={Dashboard}
                    routeProtection={true}
                />
                <ApplicationRoute
                    path="/builds"
                    component={Builds}
                    routeProtection={true}
                />

                <ApplicationRoute path="/login"
                                  component={Login}
                                  routeProtection={false}/>

            </Switch>
        </Router>
    )
}

export default Routers;
