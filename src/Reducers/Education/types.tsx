export const SET_EDUCATION = 'SET_EDUCATION'
export const PROFILE_ERROR = 'PROFILE_ERROR'

export type EducationType = {
  title: string
  school: string
  from: string
  to: string
  location: string
  project: string
}

type InitialType = {
  loading: boolean
  edu: EducationType[]
}

export const InitialState: InitialType = {
  loading: true,
  edu: [
    {
      title: 'BTech in Computer Science',
      school: 'Opole University of Technology',
      from: '2016',
      to: '2020',
      location: 'Opole, Poland',
      project: 'Developed a full-stack web application, "Recrutiment Platform" using React that allows users to post job for recruiters and find job for other users. Backend is created using Node/Express and MongoDB.',
    },
  ],
}
