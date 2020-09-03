import React from "react"

import {
    PieChartOutlined,
    FileOutlined,
} from '@ant-design/icons';
import RouterModel from "../Models/RouterConst.model";

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
        text: "Alt Başlıklı",
        children: [
            {
                id: 2.1,
                icon: <PieChartOutlined />,
                text: "Sayf 1",
                children: [],
                route: '#/realm-settings',
            },
            {
                id: 2.2,
                icon: <FileOutlined />,
                text: "Sayf 2",
                children: [],
                route: '#/realm-settings',
            },
        ]
    }
]
export { ApplicationRouter }