import { configureStore } from '@reduxjs/toolkit'
import { languagesReducer, profileReducer, socialMediaReducer } from './Reducers'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    socialMedia: socialMediaReducer,
    languages: languagesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
