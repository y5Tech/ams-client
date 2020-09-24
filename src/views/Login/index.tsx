import React from 'react'
import ApplicationHeader from '../../components/ApplicationHeader'
import withLayout from "../../HOC/withLayout";
const Login=()=>{
        return(
            <>
            <ApplicationHeader title="Y5 Tech Giriş" />
            <div>
                selam
            </div>

            </>
        )
}
export default  withLayout(React.memo(Login),{protection:false})