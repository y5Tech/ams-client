import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'

//CustomRoute
import ApplicationRoute from "../components/ApplicationRouter"
import {DynamicRouter} from "./routerConst";
import DynamicRouteModel from "../Models/DynamicRoute.model";

import ApplicationLayout from "../components/Layouts/applicationLayout"
import LoginLayout from "../components/Layouts/loginLayout"
import Login from "../views/Login";

const Routers = () => {
    const lazyComponent = (path: string) => {
        return lazy(() => import(`../views/${path}`))
    }
    return (
        <Router>
            <Switch>
                <ApplicationLayout>
                    <Suspense fallback={<div>Yükleniyor ...</div>}>
                        <ApplicationRoute
                            path="/" exact
                            layout={ApplicationLayout}
                            component={lazyComponent('Dashboard')}
                            routeProtection={true}
                        />
                        <ApplicationRoute
                            path="/builds"
                            exact={false}
                            layout={ApplicationLayout}
                            component={lazyComponent('Builds')}
                            routeProtection={true}
                        />
                    </Suspense>
                </ApplicationLayout>
                <LoginLayout>
                    <Suspense fallback={<div>Yükleniyor ...</div>}>
                        <ApplicationRoute path="/login"
                                          layout={LoginLayout}
                                          component={lazyComponent('Login')}
                                          routeProtection={false}/>
                    </Suspense>
                </LoginLayout>

            </Switch>

        </Router>


    )
}

export default Routers;
