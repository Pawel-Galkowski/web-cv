export const SET_LANGUAGES = 'SET_LANGUAGES'
export const GET_LANGUAGES = 'GET_LANGUAGES'
export const PROFILE_ERROR = 'PROFILE_ERROR'

export type LanguageType = {
  title: string
  level: string
}

type InitialType = {
  loading: boolean
  lang: LanguageType[]
}

export const InitialState: InitialType = {
  loading: true,
  lang: [
    {
      title: 'Polish',
      level: 'Native or Bilingual Proficiency',
    },
    {
      title: 'English',
      level: 'Full Professional Proficiency',
    },
  ],
}
