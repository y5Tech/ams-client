import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'

//CustomRoute
import ApplicationRoute from "../components/ApplicationRouter"

import ApplicationLayout from "../components/Layouts/applicationLayout"
import LoginLayout from "../components/Layouts/loginLayout"
import Login from "../views/Login";

const Routers = () => {
    return (
        <Router>
            <Switch>

                <ApplicationRoute path="/login"
                                  layout={LoginLayout}
                                  lazyPath={'Login'}
                                  routeProtection={false}/>

                <ApplicationRoute
                    path="/builds"
                    layout={ApplicationLayout}
                    lazyPath={'Builds'}
                    routeProtection={true}
                />
                <ApplicationRoute
                    path="/"
                    exact
                    layout={ApplicationLayout}
                    routeProtection={true}
                    lazyPath={'Dashboard'}

                />


            </Switch>

        </Router>


    )
}

export default Routers;
