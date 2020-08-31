import React from "react"
import { Layout } from 'antd';
const { Header } = Layout;

const AppHeader=()=>{
    return(
        <Header className="site-layout-background" style={{ padding: 0 }} >
        Header
        </Header>
    )
}

export default  React.memo(AppHeader);