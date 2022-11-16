import { AnyAction } from '@reduxjs/toolkit'
import { SET_EXPERIENCE, PROFILE_ERROR, InitialState } from './types'

const ExperienceReducer = (state = InitialState, action: AnyAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_EXPERIENCE:
      return {
        ...state,
        exp: state.exp.map((item, index) =>
          payload.index === index ? payload : item
        ),
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

export default ExperienceReducer
