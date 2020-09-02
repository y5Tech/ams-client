import React from "react"
import { Helmet } from "react-helmet";


interface PropTypes {
    title: string,
    children?: any
}
const ApplicationHeader = (props: PropTypes) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            {props.children}
        </Helmet>
    )
}
export default React.memo(ApplicationHeader)