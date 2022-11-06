import { FC, useState, useCallback } from 'react'
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from '../hooks'
import { SET_NAME, SET_TITLE } from '../../Reducers/Profile/types'
import { inputStyles } from './styles'

const About: FC = () => {
  const profileInformations = useAppSelector(({ profile }) => profile)
  const dispatch = useAppDispatch()

  const [name, setName] = useState<string>(profileInformations.name)
  const [title, setTitle] = useState<string>(profileInformations.title)

  const onValueChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (target.name === 'name') {
        setName(target.value)
        dispatch({
          type: SET_NAME,
          payload: target.value,
        })
      } else {
        setTitle(target.value)
        dispatch({
          type: SET_TITLE,
          payload: target.value,
        })
      }
    },
    []
  )

  return (
    <>
      <div style={inputStyles}>
        <label htmlFor='personalName'>Name: </label>
        <Input id='personalName' value={name} onChange={onValueChange} />
      </div>
      <div style={inputStyles}>
        <label htmlFor='personalTitle'>Title: </label>
        <Input id='personalTitle' value={title} onChange={onValueChange} />
      </div>
    </>
  )
}

export default About
