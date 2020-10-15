import { SET_LANGUAGE, SET_USER, SET_TOKEN } from './actionTypes'

export default function Reducers(
  state: any,
  action: { payload: any; type: string }
) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        locale: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}
