import { Input } from 'antd'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { Props } from './types'
import { HobbyType } from '../../../Reducers/Hobby/types'
import { icons } from '../../../Icons'
import { PlayCircleFilled } from '@ant-design/icons'

export const SingleHobby: FC<Props> = ({ item, index }) => {
  const [hobby, setHobby] = useState<HobbyType>(item)

  const dispatch = useAppDispatch()

  const onValueChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const newItem = {
        ...hobby,
        [target.name.toLowerCase()]: target.value,
      }
      setHobby(newItem)
      dispatch({
        type: 'SET_HOBBIES',
        payload: {
          ...newItem,
          index,
        },
      })
    },
    [hobby]
  )

  return (
    <div style={{ margin: '0 0 10px 0' }}>
      {icons.find(({name}) => name === item.icon)?.component || <PlayCircleFilled style={{ color: 'blue' }} />}
      <Input value={hobby.title} name='Title' onChange={onValueChange} />
    </div>
  )
}
