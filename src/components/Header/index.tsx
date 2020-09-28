import React from "react"
import './index.css'
import {Layout, Tabs} from 'antd';

import {Menu} from 'antd';
import HeaderDropdown from "../HeaderDropdown";
import {DownOutlined} from '@ant-design/icons';
import {languageOptions} from "../../statics/ApplicationConst";
import {useApplicationState} from "../../context/Application/store";
import useLocalStorage from "../../CustomHooks/useLocalStorage";

const {Header} = Layout;
const {TabPane} = Tabs;
const menu = (
    <Menu>
        <Menu.Item></Menu.Item>
        <Tabs defaultActiveKey="2">
            <TabPane
                tab={
                    <span>
            Tab 1
        </span>
                }
                key="1"
            >
                Tab 1
            </TabPane>
            <TabPane
                tab={
                    <span>
            Tab 2
        </span>
                }
                key="2"
            >
                Tab 2
            </TabPane>
        </Tabs>
    </Menu>
);


const AppHeader = () => {
    const [state, {setLanguage}] = useApplicationState()
    const {setLocalStorage} = useLocalStorage()
    const changeLanguage = (language: string) => {
        setLanguage(language)
        setLocalStorage("language", language)
    }
    return (
        <>

            <Header className="site-layout-background" style={{padding: 0}}>
                <div className={"header-wrapper"}>
                    <div className="header-left">

                    </div>

                    <div className="header-right">
                        <HeaderDropdown overlay={langMenu({setLanguage: changeLanguage})}>
                            <div className="header-dropdown-link-container" style={{marginRight: "8px"}}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {state.locale.toUpperCase()} <DownOutlined/>
                                </a>
                            </div>
                        </HeaderDropdown>


                        <HeaderDropdown overlay={menu}>
                            <div className="header-dropdown-link-container">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Yasin Efem Dalkılıç <DownOutlined/>
                                </a>
                            </div>
                        </HeaderDropdown>

                    </div>
                </div>
            </Header>

        </>
    )
}

export default React.memo(AppHeader);


const langMenu = (props: { setLanguage: (language: string) => void }) => {
    const seti18n = (language: string) => {
        props.setLanguage(language)
    }
    return (
        <Menu onClick={(e: any) => {
            seti18n(e.key)
        }}>
            {languageOptions.map((item => <Menu.Item key={item.key} icon={item.icon}>
                {item.language}
            </Menu.Item>))}
        </Menu>
    )
}