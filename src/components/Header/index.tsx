import React, { useMemo } from 'react'
import './styles.scss'
import { Layout, Tabs } from 'antd'

import { Menu } from 'antd'
import HeaderDropdown from '../HeaderDropdown'
import { DownOutlined } from '@ant-design/icons'
import { languageOptions } from '../../statics/ApplicationConst'
import { useApplicationState } from '../../context/Application/store'
import useLocalStorage from '../../customHooks/useLocalStorage'
import { FormattedMessage } from 'react-intl'

const { Header } = Layout
const { TabPane } = Tabs
const menu = (
  <Menu>
    <Menu.Item></Menu.Item>
    <Tabs defaultActiveKey="2">
      <TabPane tab={<span>Tab 1</span>} key="1">
        Tab 1
      </TabPane>
      <TabPane tab={<span>Tab 2</span>} key="2">
        Tab 2
      </TabPane>
    </Tabs>
  </Menu>
)

const AppHeader = () => {
  const [state, { setLanguage }] = useApplicationState()
  const { setLocalStorage, getLocalStorage } = useLocalStorage()
  const changeLanguage = (language: string) => {
    setLanguage(language)
    setLocalStorage('language', language)
  }
  const getUserFullName = useMemo(() => {
    if (state.user.firstName !== '') {
      return state.user.firstName + ' ' + state.user.lastName
    } else {
      const user = getLocalStorage('user')
      if (user !== null && user !== undefined) {
        return user
      } else {
        return <FormattedMessage id={'headerUser'} />
      }
    }
  }, [])
  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div className={'header-wrapper'}>
          <div className="header-left"></div>

          <div className="header-right">
            <HeaderDropdown overlay={langMenu({ setLanguage: changeLanguage })}>
              <div
                className="header-dropdown-link-container"
                style={{ marginRight: '16px' }}
              >
                <a
                  className="ant-dropdown-link upperCase"
                  onClick={(e) => e.preventDefault()}
                >
                  {state.locale} <DownOutlined />
                </a>
              </div>
            </HeaderDropdown>

            <HeaderDropdown overlay={menu}>
              <div className="header-dropdown-link-container">
                <a
                  className="ant-dropdown-link textCapitalaze"
                  onClick={(e) => e.preventDefault()}
                >
                  {getUserFullName}
                  <DownOutlined />
                </a>
              </div>
            </HeaderDropdown>
          </div>
        </div>
      </Header>
    </>
  )
}

export default React.memo(AppHeader)

const langMenu = (props: { setLanguage: (language: string) => void }) => {
  const seti18n = (language: string) => {
    props.setLanguage(language)
  }
  return (
    <Menu
      onClick={(e: any) => {
        seti18n(e.key)
      }}
    >
      {languageOptions.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.language}
        </Menu.Item>
      ))}
    </Menu>
  )
}
