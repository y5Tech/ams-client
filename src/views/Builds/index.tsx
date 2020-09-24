import React from "react"
import withLayout from "../../HOC/withLayout";
import ApplicationHeader from "../../components/ApplicationHeader";


const Builds = () => {
    return (
        <>
            <ApplicationHeader title="Y5 Tech Binalar"/>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                Ben bir binalar sayfasıyım selam
            </div>

        </>
    )
}


export default withLayout(React.memo(Builds), {protection: true});