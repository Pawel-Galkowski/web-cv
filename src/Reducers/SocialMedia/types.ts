export const SET_MEDIA = 'SET_MEDIA'
export const GET_MEDIA = 'GET_MEDIA'
export const PROFILE_ERROR = 'PROFILE_ERROR'

export type WebsiteTypes = {
  mail?: string
  phone?: string
  address?: string
  website?: string
  linkedin?: string
  github?: string
  twitter?: string
}

type InitialType = {
  loading: boolean
  web: WebsiteTypes
}

export const InitialState: InitialType = {
  loading: true,
  web: {
    mail: 'poczta@itgalkowski.pl',
    phone: '+48 697 522 113',
    address: 'Sosnowiec, Poland',
    website: 'https://itgalkowski.pl',
    linkedin: 'https://www.linkedin.com/in/pawel-galkowski/',
    github: 'https://github.com/Pawel-Galkowski',
  },
}
