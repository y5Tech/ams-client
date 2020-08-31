import React from "react"
import { Layout } from 'antd';

const { Footer } = Layout;


const AppFooter=()=>{
        return(
        <Footer style={{ textAlign: 'center' }}>Y5 Tech {new Date().getFullYear()}</Footer>
        )
}

export default React.memo(AppFooter)