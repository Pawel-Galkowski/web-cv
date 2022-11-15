export const SET_NAME = 'SET_NAME'
export const GET_NAME = 'GET_NAME'
export const SET_TITLE = 'SET_TITLE'
export const GET_TITLE = 'GET_TITLE'
export const SET_BIO = 'SET_BIO'
export const GET_BIO = 'GET_BIO'
export const PROFILE_ERROR = 'PROFILE_ERROR'

type InitialType = {
  loading: boolean
  name: string
  title: string
  bio: string
}

export const InitialState: InitialType = {
  loading: true,
  name: 'Pawel Galkowski',
  title: 'Software Engineer',
  bio:
    'Creative Software Engineer with 4+ years of experience with understanding of Web Development, developing web applications using JavaScript frameworks and libraries with relative and no-relative databases.',
}
