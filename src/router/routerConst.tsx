import React from "react"

import {
    PieChartOutlined,
    FileOutlined,
} from '@ant-design/icons';
import RouterModel from "../Models/RouterConst.model";
import DynamicRouteModel from "../Models/DynamicRoute.model";
import applicationLayout from "../components/Layouts/applicationLayout";
import loginLayout from "../components/Layouts/loginLayout";

const ApplicationRouter: Array<RouterModel> = [
    {
        id: 1,
        route: '/',
        icon: null,
        text: "Anasayfa", //dinamik dilden alınacak
        children: [],
    },
    {
        id: 2,
        route: '',
        icon: null,
        text: "Tanımlar",
        children: [
            {
                id: 2.1,
                icon: <PieChartOutlined/>,
                text: "Bina Tanımla",
                children: [],
                route: '/builds',
            },
            {
                id: 2.2,
                icon: <FileOutlined/>,
                text: "Sayf 2",
                children: [],
                route: '#/realm-settings',
            },
        ]
    }
]


const DynamicRouter: Array<DynamicRouteModel> = [
    {
        exact: false,
        importPath: "Builds",
        path: "/builds",
        routeProtection: true,
        layout:applicationLayout
    },

    {
        exact: false,
        importPath: "Login",
        path: "/Login",
        routeProtection: false,
        layout:applicationLayout

    }, {
        exact: true,
        importPath: "Dashboard",
        path: "/",
        routeProtection: true,
        layout:loginLayout

    },
]
export {ApplicationRouter, DynamicRouter}