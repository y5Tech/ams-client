import React from "react"
import './index.css'
import { Layout, Tabs } from 'antd';

import { Menu } from 'antd';
import HeaderDropdown from "../HeaderDropdown";
import { DownOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";
const { Header } = Layout;
const { TabPane } = Tabs;

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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header className="site-layout-background" style={{ padding: 0 }} >
        <div className={"header-wrapper"}>
          <div className="header-left">

          </div>
          <div className="header-right">
            <HeaderDropdown overlay={menu}>
              <div className="header-dropdown-link-container">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Yasin Efem Dalkılıç  <DownOutlined />
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