import { AnyAction } from '@reduxjs/toolkit'
import { SET_EDUCATION, PROFILE_ERROR, InitialState } from './types'

const EducationReducer = (state = InitialState, action: AnyAction) => {
  const { type, payload } = action
  
  switch (type) {
    case SET_EDUCATION:
      return {
        ...state,
        edu: state.edu.map((item, index) =>
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

export default EducationReducer
