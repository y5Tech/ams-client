import React from "react"
import ApplicationHeader from "../../components/ApplicationHeader"
import withLayout from "../../HOC/withLayout";
import { Skeleton } from 'antd';
const Dashboard = () => {
    return (
        <>
            <ApplicationHeader title="Y5 Tech Anasayfa" />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                Ben bir anasayfayım selam

                <Skeleton loading={true} active  />
        </div>

        </>


    )
}

export  default  React.memo(Dashboard)