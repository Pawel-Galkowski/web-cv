import { AnyAction } from '@reduxjs/toolkit'
import { SET_SKILLS, GET_SKILLS, PROFILE_ERROR, InitialState } from './types'

const SkillsReducer = (state = InitialState, action: AnyAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_SKILLS:
    case GET_SKILLS:
      return {
        ...state,
        skills: state.skills.map((item, index) =>
          payload.index === index ? payload.title : item
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

export default SkillsReducer
