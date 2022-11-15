import { AnyAction } from '@reduxjs/toolkit'
import {
  SET_LANGUAGES,
  GET_LANGUAGES,
  PROFILE_ERROR,
  InitialState,
} from './types'

const LanguagesReducer = (state = InitialState, action: AnyAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_LANGUAGES:
    case GET_LANGUAGES:
      return {
        ...state,
        lang: payload,
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

export default LanguagesReducer
