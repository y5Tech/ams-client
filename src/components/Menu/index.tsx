import React, { useState } from "react"

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { render } from "@testing-library/react";
const { SubMenu } = Menu;

interface PropTypes {
    selectedKeys?: Array<string>,
    mode?: "inline" | "horizontal" | "vertical" | "vertical-left" | "vertical-right"
}

const AppMenu = (props: PropTypes) => {
    const router = [

        {
            name: "Ana Rota",
            children: [
                {
                    name: "Rotam Vaar",
                    children: [{
                        name: "Son Rota 1",
                        children: [{
                            name: "Afk",
                            children: []
                        }]
                    }]
                },
                {
                    name: "Rotam Vaar2",
                    children: [{
                        name: "Son Rota2",
                        children: []
                    }]
                }
            ]
        },
        {
            name: "Ana Rota2",
            children: []
        }

    ]
    const [routeData] = useState(router)

 

    
    return (
        <Menu theme="dark" defaultSelectedKeys={props.selectedKeys || []} mode={props.mode || 'inline'}>
            <Menu.Item key="1" icon={<DesktopOutlined />}>
                Option 1
    </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
    </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">

                <SubMenu key="sub3" icon={<UserOutlined />} title="Denenenene">
                    <Menu.Item key="44">Bill</Menu.Item>
                    <Menu.Item key="444">Bill</Menu.Item>


                </SubMenu>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
    )
}
export default React.memo(AppMenu)