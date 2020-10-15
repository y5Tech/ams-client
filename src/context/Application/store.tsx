import React, { useReducer, useContext, createContext } from 'react'
import reducer from './reducers'
import { SET_LANGUAGE, SET_TOKEN, SET_USER } from './actionTypes'
import Login from '../../ParameterModels/onLoginParameters.model'
import request from '../../request'
import { User } from '../../Models/User.model'
import useLocalStorage from '../../customHooks/useLocalStorage'
// interfaces
interface IStore {
  locale: string
  token: string
  user: User
}

interface IActions {
  setLanguage(locale: string): any

  onLogin(login: Login): Promise<any>
}

let initialState: any
// context
const ApplicationContext = createContext<[IStore, IActions]>(initialState)

const Store = ({ children }: any) => {
  const { setLocalStorage } = useLocalStorage()
  const initialState: IStore = {
    locale: 'tr',
    token: '',
    user: {
      accessToken: '',
      email: '',
      firstName: '',
      gender: 0,
      lastName: '',
      sessionId: 0,
      userId: 0,
      userRoles: []
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions: IActions = {
    setLanguage(locale: string): any {
      dispatch({ type: SET_LANGUAGE, payload: locale })
    },
    onLogin(login: Login): Promise<any> {
      let user: User
      return request
        .post('User/Login', login)
        .then((response) => {
          if (response.status === 200 && response.data.hasError === false) {
            user = response.data.result
            dispatch({ type: SET_USER, payload: user })
            dispatch({ type: SET_TOKEN, payload: user.accessToken })
            setLocalStorage('token', user.accessToken)
          }
          return response
        })
        .catch((error) => {
          debugger
        })
    }
  }

  return (
    <ApplicationContext.Provider value={[state as IStore, { ...actions }]}>
      {children}
    </ApplicationContext.Provider>
  )
}

export const useApplicationState = () => {
  return useContext(ApplicationContext)
}

export default Store
