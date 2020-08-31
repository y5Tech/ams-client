import React, { useState } from 'react';
import { Layout } from 'antd';
import SideBar from './components/Sidebar';
import AppBreadCrumb from './components/BreadCrumb';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';

const {  Content } = Layout;
function App() {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
       <SideBar/>
        <Layout className="site-layout">
          <AppHeader />
          <Content style={{ margin: '0 16px' }}>
          <AppBreadCrumb />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>

    </>
  );
}

export default App;
