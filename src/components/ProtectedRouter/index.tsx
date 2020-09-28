import {Redirect, Route} from "react-router-dom";
import React, {useContext, useEffect} from "react";

const ProtectedRoute = ({component: Component, ...rest}:any) => {
  
    return (
        <Route {...rest}  render={(props) => {
            return (3>1 === true ? <Component {...props}/> : <Redirect
                to={{
                    pathname: "/login",
                }}
            />)
        }
        }>
        </Route>
    )
}

export default React.memo(ProtectedRoute);