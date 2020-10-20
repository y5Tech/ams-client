import React from 'react'
import Routers from './router/index'
import LanguageProvider from './lang'
import './assets/css/global.scss'
import {CountProvider} from './context/Application/test'
import {AppProvider} from "./context/App/store"
function App() {
  return (
    <>
    <CountProvider>
      <AppProvider>
      <LanguageProvider>
        <Routers />
      </LanguageProvider>
      </AppProvider>
    </CountProvider>
    </>
  )
}

export default App
