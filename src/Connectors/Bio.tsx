import { FC, useState, useCallback, ChangeEvent } from 'react'
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from './hooks'
import { SET_BIO } from '../Reducers/Profile/types';

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
    <>
      <Input.TextArea placeholder='Bio' value={bio} onChange={onValueChange} />
    </>
  )
}

export default Bio
