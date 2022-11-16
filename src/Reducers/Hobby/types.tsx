export const SET_HOBBIES = 'SET_HOBBIES'
export const PROFILE_ERROR = 'PROFILE_ERROR'

export type HobbyType = {
  title: string
  icon: string
}

type InitialType = {
  loading: boolean
  hobby: HobbyType[]
}

export const InitialState: InitialType = {
  loading: true,
  hobby: [
    {
      icon: 'AimOutlined',
      title: 'E-Sport',
    },
    {
      icon: 'CarOutlined',
      title: 'Globetrotting',
    },
    {
      icon: 'FireOutlined',
      title: 'Kickboxing',
    },
    {
      icon: 'FundProjectionScreenOutlined',
      title: 'Analitics',
    },
  ],
}
