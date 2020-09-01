import React, { ReactNode } from "react"

interface PropTypes{
    children:ReactNode
}
const LoginLayout=(props:PropTypes)=>{

    return(
        <div>

            <h1>Login Layoutuyum</h1>
            <div>
                {props.children}
            </div>
        </div>
    )

}

export default React.memo(LoginLayout)