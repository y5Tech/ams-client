import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'

//CustomRoute
import ApplicationRoute from "../components/ApplicationRouter"



const Routers = () => {
    const lazyComponent = (path: string) => {
        return lazy(() => import(`../views/${path}`))
    }
    return (
        <Suspense fallback={<div>Yükleniyor..</div>}>
            <Router>
                <Switch>
                    <ApplicationRoute
                        path="/" exact
                        component={lazyComponent("Dashboard")}
                        routeProtection={true}
                    />
                    <ApplicationRoute
                        path="/builds"
                        component={lazyComponent('Builds')}
                        routeProtection={true}
                    />

                    <ApplicationRoute path="/login"
                                      component={lazyComponent('Login')}
                                      routeProtection={false}/>

                </Switch>
            </Router>
        </Suspense>

    )
}

export default Routers;
