import React from "react"
import { Route } from "react-router-dom";
import ProtectedRouter from "../ProtectedRouter";


const ApplicationRouter = ({ component: Component, layout: Layout, ...rest }: any) => {
        return (
                <Route {...rest} exact render={props => {
                        return (
                            <>
                         {rest.routeProtection === false ? <Component  {...props} /> :
                                <ProtectedRouter component={Component} />}


                                </>
                        )
                }}>
                </Route>
        )
}

export default React.memo(ApplicationRouter)