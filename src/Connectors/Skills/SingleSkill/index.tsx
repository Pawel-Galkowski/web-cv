import { Input } from 'antd'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { Props } from './types'

export const SingleSkill: FC<Props> = ({ title, index }) => {
  const [skill, setSkill] = useState<string>(title)
  const dispatch = useAppDispatch()

  const onValueChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setSkill(target.value)
      dispatch({
        type: 'SET_SKILLS',
        payload: {
          title: target.value,
          index,
        },
      })
    },
    [skill]
  )

  return (
    <div style={{ marginBottom: '5px' }}>
      <Input value={skill} onChange={onValueChange} />
    </div>
  )
}
