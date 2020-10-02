import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'

//CustomRoute
import ApplicationRoute from "../components/ApplicationRouter"
import { DynamicRouter } from './routerConst'



const Routers = () => {
    return (
        <Router>
            <Switch>



                    {DynamicRouter.map((routeItem,index)=>{
                        return(
                            <ApplicationRoute
                            path={routeItem.path}
                            layout={routeItem.layout}
                            lazyPath={routeItem.importPath}
                            routeProtection={routeItem.routeProtection}/>
                        )
                    })}
               {/* <ApplicationRoute
                  path="/login"
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

                /> */}


            </Switch>

        </Router>


    )
}

export default Routers;
