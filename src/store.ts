import { configureStore } from '@reduxjs/toolkit'
import { languagesReducer, profileReducer, skillsReducer, socialMediaReducer, HobbyReducer, EducationReducer, ExperienceReducer } from './Reducers'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    socialMedia: socialMediaReducer,
    languages: languagesReducer,
    skills: skillsReducer,
    hobby: HobbyReducer,
    edu: EducationReducer,
    exp: ExperienceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
