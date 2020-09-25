import React from "react"
import withLayout from "../../HOC/withLayout";
import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AddBuilds from "./pages/addBuilds";

const Builds = () => {
    let {path} = useRouteMatch();
    return (
        <>

            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                Ben bir binalar sayfasıyım selam
                {console.log("path",path)}

                <Route exact  path={"/builds/add"} render={()=><h1>Ekleeee beniiii</h1>} />

            </div>

        </>
    )
}


export default React.memo(Builds)