export const SET_SKILLS = 'SET_SKILLS'
export const GET_SKILLS = 'GET_SKILLS'
export const PROFILE_ERROR = 'PROFILE_ERROR'

type InitialType = {
  loading: boolean
  skills: string[]
}

export const InitialState: InitialType = {
  loading: true,
  skills: [
    'Javascript',
    'TypeScript',
    'Angular',
    'HTML/Bootstrap/Grid/Flex',
    'Ajax',
    'CSS/SCSS/LESS',
    'REACT/REDUX',
    'Node/Express',
    'GIT/Github/AWS',
    'MongoDB',
    'Mocha/Jest/Jasmin',
    'Jira/Confluence/Postman',
    'JQuery',
    'Storybook'
  ],
}
