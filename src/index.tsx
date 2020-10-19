import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.css'
import ApplicationProvider from './context/Application/store'

console.log(process.env.REACT_APP_API)
ReactDOM.render(
    <ApplicationProvider>
      <App />
    </ApplicationProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
