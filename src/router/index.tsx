import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
//CustomRoute

import ApplicationRoute from "../components/ApplicationRouter"

//Layout
import ApplicationLayout from "../components/Layouts/applicationLayout"
import LoginLayout from "../components/Layouts/loginLayout"

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
                    layout={ApplicationLayout}
                    component={Dashboard}
                    routeProtection={true}
                />
                <ApplicationRoute
                    path="/builds"
                    layout={ApplicationLayout}
                    component={Builds}
                    routeProtection={true}
                />

                <ApplicationRoute path="/login"
                 layout={LoginLayout}
                  component={Login}
                    routeProtection={false} />

            </Switch>
        </Router>
    )
}

export default Routers;
