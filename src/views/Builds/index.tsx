import React from "react"
import {FormattedMessage} from 'react-intl';
import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AddBuilds from "./pages/addBuilds";
import {useApplicationState} from "../../context/Application/store";

const Builds = () => {
    let {path} = useRouteMatch();
    return (
        <>

            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                Ben bir binalar sayfasıyım selam  {" "}
                <FormattedMessage id={"applicationName"}/>

                <Switch>
                    <Route exact path={"/builds/add"} component={AddBuilds}/>
                </Switch>

            </div>

        </>
    )
}


export default React.memo(Builds)