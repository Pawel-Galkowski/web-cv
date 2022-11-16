import { AnyAction } from '@reduxjs/toolkit'
import { SET_HOBBIES, PROFILE_ERROR, InitialState } from './types'

const HobbyReducer = (state = InitialState, action: AnyAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_HOBBIES:
      return {
        ...state,
        hobby: state.hobby.map((item, index) =>
          payload.index === index
            ? {
                title: payload.title,
                icon: payload.icon,
              }
            : item
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

export default HobbyReducer
