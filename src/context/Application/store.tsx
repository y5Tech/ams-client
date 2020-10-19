import React, { useReducer, useContext, createContext } from 'react'
import reducer from './reducers'
import { SET_LANGUAGE, SET_USER } from './actionTypes'
import Login from '../../ParameterModels/onLoginParameters.model'
import request from '../../request'
import { User } from '../../Models/User.model'
import useLocalStorage from '../../customHooks/useLocalStorage'
import { ApplicationUtils } from '../../utils'
// interfaces
export interface IStore {
  locale: string
  token: string
  user: User
}

interface IActions {
  setLanguage(locale: string): any
  onLogin(login: Login): Promise<any>,
  onLogout(): void,
  setUser(token: string): void
}

let initialState: any
// context
const ApplicationContext = createContext<[IStore, IActions]>(initialState)

const Store = ({ children }: any) => {
  const { setLocalStorage, removeLocalStorage, getLocalStorage } = useLocalStorage()
  const initialState: IStore = {
    locale: 'tr',
    token: '',
    user: {
      email: '',
      name: '',
      lastName: '',
      gender: '',
      complexId: ''
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
        .post('Login/Index', login)
        .then((response) => {
          if (response.status === 200) return response.data
        })
        .then((response) => {
          if (response.success === true) {
            var token = response.data.token
            user = ApplicationUtils.parseJwt(token)
            dispatch({ type: SET_USER, payload: user })
            setLocalStorage('token', token)
          } else {
            console.log('login Error')
          }
          return response
        })
        .catch((error) => {
          debugger
        })
    },
    onLogout() {
      removeLocalStorage('token');
      dispatch({type: SET_USER, payload: {
        email: '',
        name: '',
        lastName: '',
        gender: '',
        complexId: ''
      }});
    },
    setUser(token: string) {
      if(token){
        var user = ApplicationUtils.parseJwt(token);
        dispatch({ type: SET_USER, payload: user })
      }
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
