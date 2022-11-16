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
    <div style={{ margin: '0 0 5px 0' }}>
      <Input value={skill} onChange={onValueChange} />
    </div>
  )
}
