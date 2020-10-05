import {Redirect, Route} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import { ApplicationUtils } from "../../utils";

const ProtectedRoute = ({component: Component, ...rest}:any) => {
    const [isAuth, setIsAuth] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== undefined && token !== null) {
            try {
                let validToken = ApplicationUtils.parseJwt(token)
                setIsAuth(true)
            } catch (e) {
                setIsAuth(false)
            }
        } else {
            setIsAuth(false)
        }
    }, [])
  
    return (
        <Route {...rest} render={(props) => {
            return ((isAuth !== null && isAuth === true) ? <Component {...props}/> :
                    (isAuth !== null && isAuth === false) ?
                        <Redirect
                            to={{
                                pathname: "/login",
                            }}
                        /> : null
            )
        }
        }>
        </Route>
    )
}

export default React.memo(ProtectedRoute);