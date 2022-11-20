export interface UserType {
  id?: string
  name: string
  email: string
  password: string
  confirmed: boolean
  confirmationKey?: string
  recoveryToken?: string
  date?: Date
}
