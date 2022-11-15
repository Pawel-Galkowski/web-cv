import { AnyAction } from '@reduxjs/toolkit'
import {
  SET_MEDIA,
  GET_MEDIA,
  PROFILE_ERROR,
  InitialState,
} from './types'

const SocialMediaReducer = (state = InitialState, action: AnyAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_MEDIA:
    case GET_MEDIA:
      return {
        ...state,
        web: payload,
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

export default SocialMediaReducer
