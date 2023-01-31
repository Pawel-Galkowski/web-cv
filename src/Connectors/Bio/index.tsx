import { FC, useState, useCallback, ChangeEvent } from 'react'
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from '../hooks'
import { SET_BIO } from '../../Reducers/Profile/types'
import { inputStyles } from './styles'

const Bio: FC = () => {
  const bioInformations = useAppSelector(({ profile }) => profile.bio)
  const dispatch = useAppDispatch()

  const [bio, setBio] = useState<string>(bioInformations)

  const onValueChange = useCallback(
    ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      setBio(target.value)
      dispatch({
        type: SET_BIO,
        payload: target.value,
      })
    },
    []
  )

  return (
    <div style={inputStyles}>
      <label htmlFor='personalBio'>Bio: </label>
      <Input.TextArea
        id='personalBio'
        placeholder='Bio'
        name='Bio'
        value={bio}
        onChange={onValueChange}
        maxLength={360}
      />
    </div>
  )
}

export default Bio
