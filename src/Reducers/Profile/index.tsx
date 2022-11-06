import { AnyAction } from '@reduxjs/toolkit'
import {
  SET_NAME,
  GET_NAME,
  SET_TITLE,
  GET_TITLE,
  GET_BIO,
  SET_BIO,
  PROFILE_ERROR,
  InitialState,
} from './types'

const ProfileReducer = (state = InitialState, action: AnyAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_NAME:
    case GET_NAME:
      return {
        ...state,
        name: payload,
        loading: false,
      }
    case SET_TITLE:
    case GET_TITLE:
      return {
        ...state,
        title: payload,
        loading: false,
      }
    case SET_BIO:
    case GET_BIO:
      return {
        ...state,
        bio: payload,
        loading: false,
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default ProfileReducer
