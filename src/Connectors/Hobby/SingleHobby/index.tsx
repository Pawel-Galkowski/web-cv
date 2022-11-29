import { Input } from 'antd'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { Props } from './types'
import { HobbyType } from '../../../Reducers/Hobby/types'
import { findIconComponent } from '../../../Icons'
import { mainSingleHobbyStyles } from './styles'

export const singleHobbyTestId = 'singleHobby-testId'

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
    <div style={mainSingleHobbyStyles} data-testid={singleHobbyTestId}>
      {findIconComponent(item.icon) || findIconComponent('PlayCircleFilled')}
      <Input value={hobby.title} name='Title' onChange={onValueChange} />
    </div>
  )
}
